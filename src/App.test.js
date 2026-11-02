import React from 'react';
import {render,screen,fireEvent,waitFor} from '@testing-library/react';
import App from './App';
const previousFetch=global.fetch;
afterEach(()=>{global.fetch=previousFetch;delete process.env.REACT_APP_GOOGLE_REVIEW_URL;});
function fill(){fireEvent.change(screen.getByLabelText('Nome do responsável'),{target:{value:'Responsável'}});fireEvent.change(screen.getByLabelText('WhatsApp com DDD'),{target:{value:'83999999999'}});fireEvent.change(screen.getByLabelText('Nome do estudante'),{target:{value:'Estudante'}});fireEvent.change(screen.getByLabelText('Data de nascimento'),{target:{value:'2020-01-01'}});fireEvent.change(screen.getByLabelText('Ano letivo de interesse'),{target:{value:'2027'}});fireEvent.change(screen.getByLabelText('Turma pretendida'),{target:{value:'1º Ano'}});}
test('confirma submissão pela Netlify e apresenta avaliação direta',async()=>{
 process.env.REACT_APP_GOOGLE_REVIEW_URL='https://g.page/r/CR2FrSoO165TEBM/review';global.fetch=jest.fn().mockResolvedValue({ok:true});const {container}=render(<App/>);fill();fireEvent.submit(container.querySelector('form'));await waitFor(()=>expect(screen.getByRole('status').textContent).toContain('Pré-matrícula recebida'));expect(global.fetch.mock.calls[0][0]).toBe('/');const params=new URLSearchParams(global.fetch.mock.calls[0][1].body);expect(params.get('form-name')).toBe('pre-matricula');expect(params.get('turma')).toBe('1º Ano');expect(screen.getByRole('link',{name:'Avaliar a escola no Google ↗'}).href).toContain('/review');
});
test('falha não anuncia sucesso nem oferece avaliação',async()=>{
 process.env.REACT_APP_GOOGLE_REVIEW_URL='https://g.page/r/CR2FrSoO165TEBM/review';global.fetch=jest.fn().mockRejectedValue(Error('network'));const {container}=render(<App/>);fill();fireEvent.submit(container.querySelector('form'));await waitFor(()=>expect(screen.getByRole('status').textContent).toContain('Não conseguimos confirmar'));expect(screen.queryByRole('link',{name:'Avaliar a escola no Google ↗'})).toBeNull();expect(screen.getByLabelText('Nome do responsável').value).toBe('Responsável');
});
