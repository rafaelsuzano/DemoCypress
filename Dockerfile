FROM node:18

ENV TERM=xterm

# Instala dependências + nginx
RUN apt-get update && apt-get install -y \
  git curl wget unzip xvfb libgtk2.0-0 libgtk-3-0 libxss1 libgconf-2-4 libnss3 libasound2 \
  libxshmfence-dev libx11-xcb-dev libxcb-dri3-0 libgbm-dev nginx

# Configura nginx na porta 95
RUN sed -i 's/80;/95;/g' /etc/nginx/sites-available/default

# Cria diretório de trabalho
WORKDIR /app

# Clona o repositório (sem subdiretório redundante)
RUN git clone https://github.com/rafaelsuzano/DemoCypress.git . 

# Instala dependências do projeto
RUN npm install
RUN npm install --save-dev mochawesome

# Verifica Cypress
RUN npx cypress verify

# Expõe porta 95
EXPOSE 95

# Executa Cypress + move relatório HTML para nginx
CMD npx cypress run --reporter mochawesome --reporter-options reportDir=cypress/reports,reportFilename=index,overwrite=true,html=true,json=false && \
    cp cypress/reports/index.html /var/www/html/index.html && \
    nginx -g 'daemon off;'
