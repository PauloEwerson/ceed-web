# Centro Educacional Estrela Dalva

## Execução local

Na pasta ceed-web, execute npm ci e npm start. Para gerar a versão de produção, execute npm run build.

## Pré-matrícula

O formulário é recebido pelo Netlify Forms. A versão HTML oculta em `public/index.html` permite que a Netlify reconheça os campos no build; a interface em `src/App.js` envia os mesmos campos para `/` e só mostra a confirmação e o convite de avaliação após uma resposta de sucesso. Uma falha preserva os dados preenchidos para contato com a escola, sem reenvio automático.

No painel da Netlify, a detecção de formulários está ativada e há uma notificação por e-mail para `ewersonmrt@gmail.com`, único membro da equipe no plano gratuito. O encaminhamento para `centroeducacionalestreladalva@gmail.com`, `ricardo.nodibe@gmail.com` e `mariapatos27@gmail.com` depende de configuração pelo responsável nessa caixa de e-mail. O serviço também guarda submissões no painel; restrinja o acesso à conta aos responsáveis pela escola e defina a retenção adequada para os dados de crianças.

`REACT_APP_GOOGLE_REVIEW_URL` define o link direto de avaliação, configurado em `netlify.toml` para produção e `.env.local` no desenvolvimento.

Teste: npm test -- --watchAll=false --runInBand
Documentação: https://docs.netlify.com/manage/forms/setup/ e https://docs.netlify.com/manage/forms/notifications/
