FROM node:18

ENV TERM=xterm

# Instala dependências do Cypress + Nginx
RUN apt-get update && apt-get install -y \
  git curl wget unzip xvfb libgtk2.0-0 libgtk-3-0 libxss1 libgconf-2-4 libnss3 libasound2 \
  libxshmfence-dev libx11-xcb-dev libxcb-dri3-0 libgbm-dev nginx

# Altera corretamente a porta do nginx para 95
RUN sed -i 's/listen 80 default_server;/listen 95 default_server;/g' /etc/nginx/sites-available/default && \
    sed -i 's/listen \[::\]:80 default_server;/listen [::]:95 default_server;/g' /etc/nginx/sites-available/default

# Cria diretório de trabalho
WORKDIR /app

# Clona seu repositório
RUN git clone https://github.com/rafaelsuzano/DemoCypress.git .

# Instala dependências do projeto e reporter
RUN npm install
RUN npm install --save-dev mochawesome cypress-mochawesome-reporter

# Verifica instalação do Cypress
RUN npx cypress verify

# Copia o script de entrada e garante permissão
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 95

# Usa o script como ponto de entrada
CMD ["sh", "/entrypoint.sh"]
