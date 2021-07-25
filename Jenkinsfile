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
                dir('blogcontent') {
                    // git url: 'https://github.com/connerkward/blogcontent', credentialsId: 'githubpat'
                    // sh "cd dingo && ls"
                    checkout scm: [$class: 'GitSCM', source: 'https://github.com/connerkward/blogcontent', clean: true, credentialsId: 'githubpat']

                }
                sh "ls"
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
