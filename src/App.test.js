import React from 'react';
import {render,screen,fireEvent} from '@testing-library/react';
import App from './App';
afterEach(()=>{sessionStorage.clear();window.history.replaceState(null,'','/');delete process.env.REACT_APP_GOOGLE_REVIEW_URL;});
test('envio nativo usa o serviço, ambas as cópias e retorno ao site',()=>{
  const {container}=render(<App/>);
  const form=container.querySelector('form');
  expect(form.method).toBe('post');
  expect(form.action).toBe('https://formsubmit.co/centroeducacionalestreladalva@gmail.com');
  expect(form.elements._cc.value).toBe('ricardo.nodibe@gmail.com,mariapatos27@gmail.com');
  expect(form.elements._next.value).toBe('https://ceed.com.br/?prematricula=enviada#matricula');
  expect(form.querySelector('[name="_captcha"]')).toBeNull();
});
test('envio permite navegação nativa sem anunciar sucesso antecipado',()=>{
  const {container}=render(<App/>);
  expect(fireEvent.submit(container.querySelector('form'))).toBe(true);
  expect(sessionStorage.getItem('ceed-submission-pending')).toBe('1');
  expect(screen.getByRole('status').textContent).toContain('concluir o envio');
  expect(screen.queryByText(/Solicitação enviada!/)).toBeNull();
});
test('retorno do fluxo mostra confirmação e convite dispensável',()=>{
  sessionStorage.setItem('ceed-submission-pending','1');
  window.history.replaceState(null,'','/?prematricula=enviada');
  process.env.REACT_APP_GOOGLE_REVIEW_URL='https://maps.app.goo.gl/NUr8WjeFfxFSNAVRA';
  render(<App/>);
  expect(screen.getByRole('status').textContent).toContain('Solicitação enviada');
  expect(screen.getByRole('link',{name:'Avaliar a escola no Google ↗'}).href).toContain('NUr8WjeFfxFSNAVRA');
  fireEvent.click(screen.getByRole('button',{name:'Agora não'}));
  expect(screen.queryByRole('link',{name:'Avaliar a escola no Google ↗'})).toBeNull();
  expect(window.location.search).toBe('');
});
test('URL de retorno sem início de envio não anuncia sucesso',()=>{
  window.history.replaceState(null,'','/?prematricula=enviada');
  render(<App/>);
  expect(screen.queryByText(/Solicitação enviada!/)).toBeNull();
});
test('galeria mantém 19 fotos e navegação circular',()=>{
  render(<App/>);
  expect(screen.getAllByRole('button',{name:/^Foto \d+:/})).toHaveLength(19);
  fireEvent.click(screen.getByRole('button',{name:'Foto anterior'}));
  expect(screen.getByRole('button',{name:'Ampliar foto: Nosso espaço reflexivo'})).toBeTruthy();
});
