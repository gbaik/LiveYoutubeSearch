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
- Fix styling
- Make it so the url, reflects the video shown instead of being for visual
- Make video chat update in real time using sockets
- Seed the database and have a default video list shown
- Add more error handling on backend
- Sanitize form inputs
- Implement session storage to:
    - Temporarily store access token, and use them to send messages (instead of it being hardcoded)