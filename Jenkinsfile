pipeline {
    agent any

    stages {
        stage('Stop Curr Container') {
            steps {
                sh 'docker container stop landingpage'
                sh 'docker container prune -f'
            }
        }
        stage('Git') {
            steps {
                git 'https://github.com/connerkward/landingpage'
                sh 'ls'
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
