# NodeJS MongoDB Docker

    Requirement

        - Node JS 10+ version
        - Docker 
        - Docker compose
        - MongoDB 3+ version

# Clone repo

    git clone https://github.com/Rabson/NodeJS-MongoDB-Docker.git

    cd NodeJS-MongoDB-Docker

    rename .env.example to .env

    npm install  OR yarn install

    npm start OR yarn start

# Run docker container

    ## To start container
    
        docker-compose up --build -d

    ## To stop container
    
        docker-compose down


### while Running with docker change "localhost" to "database" in mongodb connection string