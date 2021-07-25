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

                sh "ls"
            }
        }
        stage ('Extract') {
            steps {
                git(
                        url: 'https://github.com/connerkward/blogcontent.git',
                        credentialsId: 'connerkward',
                        // branch: "${branch}"
                    )
                git(
                    url: 'https://github.com/connerkward/landingpage.git'
                )
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
