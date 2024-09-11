# express-api

API

`aws ecr get-login-password --region ap-southeast-2 | docker login --username AWS --password-stdin 039612872662.dkr.ecr.ap-southeast-2.amazonaws.com`

`docker build -t beyond/temp .`

`docker tag beyond/temp:latest 039612872662.dkr.ecr.ap-southeast-2.amazonaws.com/beyond/temp:latest`

`docker push 039612872662.dkr.ecr.ap-southeast-2.amazonaws.com/beyond/temp:latest`
