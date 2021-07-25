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

        node() {
            stage ('Extract') {
                parallel 'Extract':{
                    dir('project1') {
                        git url: 'ssh://git@githost/project1.git'
                    }
                    dir('project2') {
                        git url: 'ssh://git@githost/project2.git'
                    }
                }   
            }   
        }
        stage('Build Dockerfile') {
            steps {
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
