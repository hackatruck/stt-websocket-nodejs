# stt-websocket-nodejs
Projeto exemplo em NodeJS usando Watson Speech to Text para transcrever o audio do microfone usando web sockets

# Instalação e configuração

## Clone e instale as dependencias
```
git clone https://github.com/hackatruck/stt-websocket-nodejs.git
cd stt-websocket-nodejs
npm install
```

## Configure as credenciais do serviço Watson Conversation

1. Acesse [bluemix.net](bluemix.net)
2. Crie uma instância do serviço Watson Speech to Text
3. Copie as credenciais do serviço (username e password) para o arquivo config.js

# Execute a aplicação
Execute a aplicação de exemplo que utiliza a biblioteca watson-developer-cloud com o comando


    node app.js


Execute a aplicação de exemplo que utiliza websockets puros, sem o uso da biblioteca watson-developer-cloud com o comando

    node app_ws.js
