FROM nodesource/nsolid
COPY . /app
WORKDIR /app
RUN npm install

CMD [ "node", "start" ]
