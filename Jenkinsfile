pipeline {
    agent any

    stages {
        stage('Dev') {
            steps {
                echo 'DEV: Installing dependencies and building the application...'
                sh 'npm install'
                sh 'npm run dev'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'TEST: Running automated tests...'
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'DEPLOY: Publishing the build...'
                sh 'rm -rf deploy'
                sh 'mkdir -p deploy'
                sh 'cp -r dist/. deploy/'
                archiveArtifacts artifacts: 'deploy/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'CI/CD pipeline completed successfully.'
        }
        failure {
            echo 'CI/CD pipeline failed. Check the stage logs.'
        }
    }
}
