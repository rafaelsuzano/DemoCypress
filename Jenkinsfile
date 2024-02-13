pipeline {
  agent any



   stages {
       stage('Dependencies') {
           steps {
       
               sh 'npm install cypress --force'
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
