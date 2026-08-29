pipeline {

    agent any

    tools {
        nodejs 'node26'
    }

    stages {

        stage('Dev') {
            steps {
                echo 'DEV: Installing dependencies and building the application...'

                sh 'node --version'
                sh 'npm --version'

                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'TEST: Running tests...'

                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'DEPLOY: Deploying the application...'
            }
        }
    }

    post {
        success {
            echo 'CI/CD pipeline completed successfully!'
        }

        failure {
            echo 'CI/CD pipeline failed. Check the stage logs.'
        }
    }
}
