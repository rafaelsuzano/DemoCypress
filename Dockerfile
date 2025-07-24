FROM node:18

ENV TERM=xterm

# Instala dependências do Cypress
RUN apt-get update && apt-get install -y \
    git libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev \
    libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

# Diretório de trabalho
WORKDIR /app

# Clona o repositório com os testes
RUN git clone https://github.com/rafaelsuzano/DemoCypress.git .

# Instala dependências do projeto
RUN npm install

# Verifica instalação do Cypress
RUN npx cypress verify

# Copia o script de entrada e garante permissão
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Comando de execução
CMD ["/entrypoint.sh"]
