# Players API
An API for managing and displaying player information.

## Technologies used
-Node.js
-Express.js
-MongoDB
-Mongoose
-Endpoints
-Create a new player

## All API Endpoints

### Create a player
Endpoint: `players/create`

Method: `POST`

Request Body:

```json
{
  "name": "",
  "level": ""
}
```

## 3 Get all players
Endpoint: 'players/all/:page'

Method: `GET`


### Generate a random word
Endpoint: 'players/playzone'

Method: `GET`

### Update player score
Endpoint: 'players/updateScore`

Method: `POST`

Request Body:

```json
{
  "score": 0,
  "name": "",
  "level": ""
}

```
Note: Please fork the repository and do "npm i " to install all the dependencies.


