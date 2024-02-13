pipeline {
  agent any



   stages {
       stage('Dependencies') {
           steps {
       
               sh 'npm install cypress'
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
}
