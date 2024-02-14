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
      slackSend color: '#36a64f', message: "Automação executada com sucesso  ${env.JOB_NAME}  build ${currentBuild.number} !!!"
      slackUploadFile filePath: 'comandosDocker.txt', initialComment: 'Here is your file', credentialId: "WubehS9HZ9MxOUwgtvVknNse"
                          
  
    }
    failure {
      slackSend color: '#ff0000', message: "Falha na execução da automação  ${env.JOB_NAME}  build ${currentBuild.number}!!!" 
    }
  }


}