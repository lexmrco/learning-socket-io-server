const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/ping', (req, res) => {
  res.send('Pong');
});


// Set up server
const ioServer = require('./socket')(app);

const port = process.env.PORT || 9000;
ioServer.listen(port, () => console.log(`Web socket starting on port ${port}`));