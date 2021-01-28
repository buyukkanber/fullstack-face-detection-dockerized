#!/bin/bash
cd face-detection/ 
docker-compose up --build -d

cd ../face-detection-api/ 
docker-compose up --build -d
