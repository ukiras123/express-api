# express-api

API

`aws ecr get-login-password --region ap-southeast-2 --profile beyond | docker login --username AWS --password-stdin 039612872662.dkr.ecr.ap-southeast-2.amazonaws.com`

`docker build -t beyond/express-demo-api .`

`docker tag beyond/express-demo-api:latest 039612872662.dkr.ecr.ap-southeast-2.amazonaws.com/beyond/express-demo-api:latest`

`docker push 039612872662.dkr.ecr.ap-southeast-2.amazonaws.com/beyond/express-demo-api:latest`
