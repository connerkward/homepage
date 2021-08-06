pipeline {
    agent any

    stages {
        stage('Stop Curr Container') {
            steps {
                catchError {
                    sh 'docker container stop homepage'
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
                // cleanWs()
                dir ("blogcontent") {
                    script {
                        git url: 'https://github.com/connerkward/blogcontent', credentialsId: 'githubpat', branch: 'main'
                    }
                    sh "ls"
                }
                sh "ls"
            }   
        }    
        stage ("replace content and images folders") {
            steps {
                sh 'rm -R content'
                sh "ls"
                sh 'rm -R public/img/'
                sh "ls"
                sh "cp -r blogcontent/posts content"
                sh "cd content && ls"
                sh "cp -r blogcontent/img public/"
                sh "cd public && ls"
                sh "cd public/img && ls"
            }
        }
     
        stage('Build Dockerfile') {
            steps {
                sh 'docker build -t homepage .'
                sh 'ls'
            }
        }
        stage('Start Container') {
            steps {
                sh 'docker run --expose 80 --name homepage --net web --restart unless-stopped -d homepage'
            }
        }
    }
}
