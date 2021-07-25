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

        stage ('Extract') {
            parallel 'Extract'{
                dir('dino') {
                    git(
                        url: 'https://github.com/connerkward/blogcontent.git',
                        credentialsId: 'connerkward',
                    )
                    sh "ls"
                }
                dir('project2') {
                    git(
                        url: 'https://github.com/connerkward/landingpage.git',
                    )
                    sh "ls"
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
