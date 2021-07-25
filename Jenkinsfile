pipeline {
    agent any

    stages {
        stage('Stop Curr Container') {
            steps {
                catchError {
                    sh 'docker container stop landingpage'
                }           
                echo currentBuild.result
                
                sh 'docker container prune -f'
                sh 'docker image prune -f'
                sh 'docker volume prune -f'
            }
        }
        stage ('ghub') {
            checkout([$class: 'GitSCM', 
                branches: [[name: '*/master']],
                credentialsId: 'ghub',
                userRemoteConfigs: [[url: 'hhttps://github.com/connerkward/blogcontent']]])
        }   
    
        stage('Build Dockerfile') {
            steps {
                sh 'ls'
                sh 'docker build -t landingpage .'
                sh 'ls'
            }
        }
        stage('Start Container') {
            steps {
                sh 'docker run --expose 80 --name landingpage --net web --restart unless-stopped -d landingpage'
            }
        }
    }
}
