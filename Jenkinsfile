pipeline {
    agent any
    tools {
        nodejs 'node_18.16.0'
    }
    
    stages {
        stage("build") {
            steps {
                sh 'npm --version'
                sh 'node -v'
                // sh 'npm install'
            }
        }
        stage("step_3") {
            steps {
                echo "this is step 3"
            }
        }
    }
}