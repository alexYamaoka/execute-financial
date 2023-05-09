pipeline {
    agent any
    tools {
        nodejs 'node_18.16.0'
    }
    
    stages {
        stage("checkout from github") {
            steps {
                git branch: 'main', credentialsId: 'Github_credential', url: 'https://github.com/alexYamaoka/execute-financial'
            }
        }
        stage("build") {
            steps {
                sh "npm --version"
                sh "node -v"
            }
        }
        stage("step_3") {
            steps {
                echo "this is step 3"
            }
        }
    }
}