const {test}=require('node:test');
const assert=require('node:assert/strict');
const {handler}=require('../netlify/functions/pre-matricula');
const payload={responsavel:'TESTE TECNICO',telefone:'83999999999',estudante:'TESTE SEM ALUNO REAL',nascimento:'2020-01-01',ano:'2027',turma:'1º Ano'};
const event={httpMethod:'POST',headers:{origin:'https://ceed.com.br'},body:JSON.stringify({...payload,_cc:'untrusted@example.com'})};
test('encaminha aos destinatários fixos e confirma apenas sucesso explícito',async t=>{
  t.mock.method(global,'fetch',async(url,options)=>{
    assert.equal(url,'https://formsubmit.co/ajax/centroeducacionalestreladalva@gmail.com');
    const body=JSON.parse(options.body);
    assert.equal(body._cc,'ricardo.nodibe@gmail.com,mariapatos27@gmail.com');
    assert.equal(body.estudante,payload.estudante);
    return {ok:true,json:async()=>({success:'true'})};
  });
  assert.equal(JSON.parse((await handler(event)).body).success,true);
});
test('preserva resultado incerto em erro de rede',async t=>{
  t.mock.method(global,'fetch',async()=>{throw Error('network');});
  const result=await handler(event);
  assert.equal(result.statusCode,502);
  assert.equal(JSON.parse(result.body).success,null);
});
test('bloqueia corpo inválido e campos obrigatórios ausentes',async t=>{
  const fetch=t.mock.method(global,'fetch',async()=>{throw Error('must not call');});
  assert.equal((await handler({...event,body:'{}'})).statusCode,400);
  assert.equal((await handler({...event,body:'invalid'})).statusCode,400);
  assert.equal(fetch.mock.callCount(),0);
});
test('não transforma ativação pendente em sucesso',async t=>{
  t.mock.method(global,'fetch',async()=>({ok:true,json:async()=>({success:'false',message:'Activation required'})}));
  const result=await handler(event);
  assert.equal(result.statusCode,409);
  assert.equal(JSON.parse(result.body).code,'activation');
});
