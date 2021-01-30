# Fullstack Face Detection App - Dockerized
Fullstack dockerized web application.

+ Frontend | React
+ Backend | Node, Express 
+ DB | PostgreSQL

![Sample Image](https://github.com/buyukkanber/fullstack-face-detection-dockerized/blob/main/ss.jpg)

## Getting Started

1. Clone this repository
2. Run `npm install`
3. Make sure you have PostgreSQL and Docker installed and running on your computer (If you have Linux system, make also sure you have installed docker-compose on you computer)
4. You must add your own API key in the **face-detection-api/controllers/image.js** file to connect to Clarifai API. You can grab Clarifai API key [here](https://www.clarifai.com/)
5. Run `docker-compose up --build` in face-detection and face-detection-api subfolders for the first setup phase or just run the `script.sh` file to build and run docker containers on detached mode


## Connecting to the App

Open your web browser and access the app `http://localhost:3000/`.
Register and insert your image link

To access frontend's bash: 
Run `docker-compose exec face-detection bash` command in the **face-detection** subfolder

To access backend's bash: 
Run `docker-compose exec face-detection-api bash` command in the **face-detection-api** subfolder

To access postgres: (adjust PORT number if needed) 
Run `psql postgres://<username>:<password>@localhost:5432/face-detection-docker`

After accessing to the db, you can check your users and login tables:
```
SELECT * FROM login;
```
```
SELECT * FROM users;
```
