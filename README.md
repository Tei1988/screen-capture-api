## screen-capture-api
screen-capture-api is an API server for capturing web page as an image.

## How to run
```
npm install
npm start
```

## API
### GET /
|name|include?|example|
|---|---|---|
|url|Must|https://github.com/Tei1988/screen-capture-api|

#### sample
**Request**  
`/?url=https://github.com/Tei1988/screen-capture-api`

**Response**  
The response is returned as png image.

### GET /:size/
|name|include?|example|
|---|---|---|
|size|Must|[0-9]+,[0-9]+|
|url|Must|https://github.com/Tei1988/screen-capture-api|

#### sample
**Request**  
`/?url=https://github.com/Tei1988/screen-capture-api`

**Response**  
The response is returned as png image.
