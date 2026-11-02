const recipient = 'centroeducacionalestreladalva@gmail.com';
const copies = 'ricardo.nodibe@gmail.com,mariapatos27@gmail.com';
const reply = (statusCode, body) => ({statusCode, headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'}, body:JSON.stringify(body)});
exports.handler = async event => {
  if(event.httpMethod !== 'POST') return reply(405,{success:false,code:'method'});
  const origin = event.headers?.origin;
  if(origin && !['https://ceed.com.br','https://www.ceed.com.br','http://localhost:3000','http://127.0.0.1:3000'].includes(origin)) return reply(403,{success:false,code:'origin'});
  if(!event.body || event.body.length>16000) return reply(400,{success:false,code:'invalid'});
  let input;
  try {input=JSON.parse(event.body);} catch {return reply(400,{success:false,code:'invalid'});}
  if(!input || typeof input!=='object' || input._honey) return reply(400,{success:false,code:'invalid'});
  const data={};
  for(const key of ['responsavel','telefone','email','estudante','nascimento','ano','turma','observacoes']) {
    if(input[key]!==undefined && typeof input[key]!=='string') return reply(400,{success:false,code:'invalid'});
    data[key]=(input[key]||'').trim();
    if(data[key].length>(key==='observacoes'?1500:150)) return reply(400,{success:false,code:'invalid'});
  }
  if(['responsavel','telefone','estudante','nascimento','ano','turma'].some(key=>!data[key])) return reply(400,{success:false,code:'invalid'});
  const controller=new AbortController();
  const timer=setTimeout(()=>controller.abort(),45000);
  try {
    const response=await fetch('https://formsubmit.co/ajax/'+recipient,{
      method:'POST',signal:controller.signal,
      headers:{'Content-Type':'application/json',Accept:'application/json',Origin:'https://ceed.com.br',Referer:'https://ceed.com.br/'},
      body:JSON.stringify({...data,_subject:'Nova pré-matrícula — Centro Educacional Estrela Dalva',_cc:copies,_template:'table',_url:'https://ceed.com.br/'})
    });
    let result; try {result=await response.json();} catch {return reply(502,{success:null,code:'provider_non_json',providerStatus:response.status});}
    if(/activat/i.test(result.message||'')) return reply(409,{success:false,code:'activation',message:'Activation required'});
    if(response.ok && (result.success===true || result.success==='true')) return reply(200,{success:true});
    // Do not expose provider responses or student information in logs.
    return reply(502,{success:null,code:'provider_rejected',providerStatus:response.status,reason:typeof result.message==='string'?result.message.slice(0,250):'No message'});
  }catch(error) {return reply(502,{success:null,code:'provider_connection',reason:error.cause?.code||error.name});}
  finally {clearTimeout(timer);}
};

