FROM node:16 

WORKDIR /app

COPY . .

RUN npm install

# Execute role appropriate tasks
ENTRYPOINT [ "/app/src/database/startup.sh" ]