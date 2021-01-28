FROM node:12.18.4

WORKDIR /usr/src/face-detection

COPY package.json /usr/src/face-detection

RUN npm install

COPY . .

EXPOSE 3000

CMD ["/bin/bash"]