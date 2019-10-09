FROM node:8-alpine

WORKDIR /var/www/html/app

CMD ["sh","-c","npm install -g nodemon && npm install && nodemon index.js"]

# CMD ["sh","-c"," npm install && node rabbitWorker.js && node index && rabbitmq-plugins enable --offline rabbitmq_management"]
