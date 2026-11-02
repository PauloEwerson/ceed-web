import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import App from './App';

const originalFetch = global.fetch;
afterEach(() => {global.fetch = originalFetch;});
function fillForm() {
  fireEvent.change(screen.getByLabelText('Nome do responsável'), {target:{value:'Responsável de teste'}});
  fireEvent.change(screen.getByLabelText('WhatsApp com DDD'), {target:{value:'83999999999'}});
  fireEvent.change(screen.getByLabelText('Nome do estudante'), {target:{value:'Estudante de teste'}});
  fireEvent.change(screen.getByLabelText('Data de nascimento'), {target:{value:'2020-01-01'}});
  fireEvent.change(screen.getByLabelText('Ano letivo de interesse'), {target:{value:'2027'}});
  fireEvent.change(screen.getByLabelText('Turma pretendida'), {target:{value:'1º Ano'}});
}
test('envia para o endereço configurado e inclui ambas as cópias', async () => {
  process.env.REACT_APP_SCHOOL_EMAIL='centroeducacionalestreladalva@gmail.com';
  process.env.REACT_APP_SCHOOL_CC='ricardo.nodibe@gmail.com,mariapatos27@gmail.com';
  global.fetch=jest.fn().mockResolvedValue({ok:true,json:async()=>({success:'true'})});
  render(<App/>); fillForm();
  fireEvent.submit(screen.getByRole('button',{name:'Enviar pré-matrícula ↗'}).closest('form'));
  await waitFor(()=>expect(screen.getByRole('status').textContent).toContain('Solicitação enviada'));
  const [url, options]=global.fetch.mock.calls[0];
  expect(url).toBe('https://formsubmit.co/ajax/centroeducacionalestreladalva%40gmail.com');
  expect(new URLSearchParams(options.body).get('_cc')).toBe('ricardo.nodibe@gmail.com,mariapatos27@gmail.com');
  expect(new URLSearchParams(options.body).get('turma')).toBe('1º Ano');
});
test('falha não apaga os dados e permite tentar novamente', async()=>{
  process.env.REACT_APP_SCHOOL_EMAIL='centroeducacionalestreladalva@gmail.com';
  global.fetch=jest.fn().mockRejectedValue(new Error('Falha de conexão'));
  render(<App/>); fillForm();
  fireEvent.submit(screen.getByRole('button',{name:'Enviar pré-matrícula ↗'}).closest('form'));
  await waitFor(()=>expect(screen.getByRole('status').textContent).toContain('Não foi possível enviar'));
  expect(screen.getByLabelText('Nome do responsável').value).toBe('Responsável de teste');
  expect(screen.getByRole('button',{name:'Enviar pré-matrícula ↗'}).disabled).toBe(false);
});

test('explica a ativação pendente sem anunciar sucesso e preserva os dados',async()=>{
  process.env.REACT_APP_SCHOOL_EMAIL='centroeducacionalestreladalva@gmail.com';
  global.fetch=jest.fn().mockResolvedValue({ok:true,json:async()=>({success:'false',message:"This form needs Activation. We've sent you an email."})});
  render(<App/>); fillForm();
  fireEvent.submit(screen.getByRole('button',{name:'Enviar pré-matrícula ↗'}).closest('form'));
  await waitFor(()=>expect(screen.getByRole('status').textContent).toContain('em ativação'));
  expect(screen.getByLabelText('Nome do responsável').value).toBe('Responsável de teste');
  expect(screen.queryByText(/Solicitação enviada!/)).toBeNull();
});
test('galeria inclui 19 imagens e volta do último item ao primeiro',()=>{
  render(<App/>);
  expect(screen.getAllByRole('button',{name:/^Foto \d+:/})).toHaveLength(19);
  fireEvent.click(screen.getByRole('button',{name:'Foto anterior'}));
  expect(screen.getByRole('button',{name:'Ampliar foto: Nosso espaço reflexivo'})).toBeTruthy();
  fireEvent.click(screen.getByRole('button',{name:'Próxima foto'}));
  expect(screen.getByRole('button',{name:'Ampliar foto: Bem-vindos à Estrela Dalva'})).toBeTruthy();
});

