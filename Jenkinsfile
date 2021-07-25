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
        // stage('Git') {
        //     steps {
        //         git 'https://github.com/connerkward/landingpage'
        //         sh 'ls'
        //         git 'https://github.com/connerkward/blogcontent'
        //         sh 'ls'
        //     }
        // }
        stage('Checkout external proj') {
            steps {
                git(
                    url: 'https://github.com/connerkward/blogcontent.git',
                    credentialsId: 'connerkward',
                    // branch: "${branch}"
                )
                sh "ls"
                // git(
                    // url: 'https://github.com/connerkward/landingpage.git',
                    // credentialsId: 'connerkward',
                    // branch: "${branch}"
                // )
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
