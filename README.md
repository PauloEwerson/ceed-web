# Execução local

Na pasta ceed-web, execute npm ci e npm start. Para gerar a versão de produção, execute npm run build.

## Pré-matrícula

O formulário faz um POST nativo para o FormSubmit. Os destinatários e campos reservados estão em src/App.js. O serviço mantém sua verificação antispam e retorna à URL _next após concluir o fluxo. A página reconhece o retorno junto com uma marca de início de envio na sessão, mostra a confirmação e o convite de avaliação. A marca não é um comprovante de entrega em caixa postal. Não há armazenamento de dados dos estudantes no navegador nem reenvio automático.

A integração direta por AJAX apresentou falhas no tablet. O encaminhamento pela Netlify foi retirado porque o FormSubmit retornou HTTP 403 ao servidor.

REACT_APP_GOOGLE_REVIEW_URL define o link de avaliação, configurado em netlify.toml para produção e .env.local no desenvolvimento. O recebimento inicial do FormSubmit exige ativação pela escola.

Teste: npm test -- --watchAll=false --runInBand
Documentação: https://formsubmit.co/documentation
