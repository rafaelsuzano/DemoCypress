pipeline {
  agent any

 options { ansiColor('xterm') }

   stages {
       stage('Dependencies') {
           steps {
       
               sh 'npm install '
           }
       }
       
       
       stage('Install Cypress') {
           steps {
       
               sh 'npx cypress install --force'
           }

       
       }
       
       stage('e2e Tests') {
           steps {
               sh ' npx cypress run '
           }
       }
       stage('Deploy') {
           steps {
               echo 'Deploying....'
           }
       }
   

    }

    post {
    success {
      slackSend color: '#36a64f', message: "Automação executada com sucesso !!"
     slackUploadFile filePath: "reports/html/*.html", channel: "#democypress", initialComment:  "HEY HEY", credentialId: "WubehS9HZ9MxOUwgtvVknNse"
  
    }
    failure {
      slackSend color: '#ff0000', message: "Falha na execução da automação !!"
    }
  }


}