pipeline {
  agent any



   stages {
       stage('Dependencies') {
           steps {
       
               sh 'npm install'
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
