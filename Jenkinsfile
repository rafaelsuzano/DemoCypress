pipeline {
    agent any
    options {
        ansiColor('xterm')
    }

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
        post {
            success {
                slackSend "Build deployed successfully - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
            }
        }



    }
}