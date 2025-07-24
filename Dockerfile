FROM node:18

ENV TERM=xterm

# Instala dependências e nginx
RUN apt-get update && apt-get install -y \
  git curl wget unzip xvfb libgtk2.0-0 libgtk-3-0 libxss1 libgconf-2-4 libnss3 libasound2 \
  libxshmfence-dev libx11-xcb-dev libxcb-dri3-0 libgbm-dev nginx

# Altera porta do nginx para 95
RUN sed -i 's/80;/95;/g' /etc/nginx/sites-available/default

WORKDIR /app

# Clona projeto Cypress
RUN git clone https://github.com/rafaelsuzano/DemoCypress.git .

# Instala dependências + reporter
RUN npm install
RUN npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator cypress-mochawesome-reporter

# Verifica Cypress
RUN npx cypress verify

EXPOSE 95

# Executa testes e serve relatório final com nginx
CMD npx cypress run && \
    cp cypress/reports/mochawesome.html /var/www/html/index.html && \
    nginx -g 'daemon off;'
