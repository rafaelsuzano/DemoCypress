pipeline {
  agent any

  options {
    ansiColor('xterm')
    timestamps()
  }

  stages {
    stage('Run tests') {
      steps {
        sh 'node -v || true'
        sh 'npm -v || true'
        sh 'npm ci'
      }
    }

    stage('Verify Cypress') {
      steps {
        sh 'npx cypress verify'
      }
    }

    stage('Run tests') {
      steps {
        sh 'npm run teste'
      }
    }

    stage('Generate HTML Report') {
      steps {
        sh 'npx mochawesome-report-generator cypress/reports/mochawesome.json -o cypress/reports --reportFilename index'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'cypress/reports/**, cypress/screenshots/**, cypress/videos/**', allowEmptyArchive: true, fingerprint: false
      publishHTML([
        allowMissing: true,
        alwaysLinkToLastBuild: true,
        keepAll: true,
        reportDir: 'cypress/reports',
        reportFiles: 'index.html',
        reportName: 'Cypress Mochawesome Report'
      ])
    }
    success {
      echo 'Tests completed successfully.'
    }
    failure {
      echo 'Some tests failed.'
    }
  }
}
