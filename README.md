# Execução local

Instale o Node.js LTS (inclui npm). Na pasta ceed-web, execute npm ci e npm start. Para gerar a versão de produção, execute npm run build.

## Pré-matrícula

A configuração local está em .env.local, ignorado pelo Git. REACT_APP_SCHOOL_EMAIL define o destinatário principal e REACT_APP_SCHOOL_CC define as cópias separadas por vírgula. Reinicie o servidor ou gere uma nova compilação após alterações. Configure essas mesmas variáveis na hospedagem antes de compilar.

O FormSubmit exige ativação pelo destinatário principal no primeiro uso. Antes de publicar, envie uma solicitação identificada como teste, confirme a ativação na caixa da escola e verifique o recebimento no destinatário e nas duas cópias. A aceitação pelo serviço não comprova entrega nas caixas de e-mail.

Documentação: https://formsubmit.co/documentation

## Envio pelo próprio domínio

O navegador envia a pré-matrícula para `/.netlify/functions/pre-matricula`. A função em `netlify/functions/pre-matricula.js` valida os dados e encaminha ao FormSubmit com os destinatários fixos da escola. Não registra dados de alunos em logs. O proxy de desenvolvimento em `src/setupProxy.js` utiliza o mesmo handler; reinicie `npm start` após alterações nesse arquivo.

As variáveis de e-mail do build não configuram esta função: os destinatários autorizados são definidos no próprio handler. O convite de avaliação continua usando `REACT_APP_GOOGLE_REVIEW_URL`.

Teste do servidor: `node --test tests/pre-matricula.test.cjs`. Teste da página: `npm test -- --watchAll=false --runInBand`.
