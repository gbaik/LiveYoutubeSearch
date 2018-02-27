## Install Project Dependencies
`npm install`

## Installing System Dependencies

`brew install mongodb`

## Database Initialization

IMPORTANT: ensure `mongodb` is running before performing these steps.

## Running the App
```
  npm run server
  npm run build
  mongod
```

## Future Work
- Fix how access token is stored
- Fix styling
- Empty messages when sent
- Make video chat update in real time using sockets
- Make it so the url, reflects the video shown instead of being for visual
- Add more error handling on backend
- Sanitize form inputs
- Seed the database and have a default video list shown
- Optimize