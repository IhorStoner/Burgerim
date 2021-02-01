const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
require('express-async-errors');
const apiRouter = require('./routes');
const config = require('config');
const https = require('https')
const http = require('http')
const fs = require('fs');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', apiRouter);


if(process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, './client/build')))

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./client/build/index.html'))
  })
}

app.use((err, req, res, next) => {
  res
    .status(500)
    .send({ error: err.message })
});

const PORT = process.env.PORT || config.get('port') || 443
const HTTP_PORT = 80

const httpsOptions = {
  key: fs.readFileSync(path.resolve(__dirname, './ssl/privkey.pem')), // путь к ключу
  cert: fs.readFileSync(path.resolve(__dirname, './ssl/fullchain.pem')) // путь к сертификату
}


const redirectHttp = express();
redirectHttp.get('*', (req,res) => {
  res.redirect('https://burgerim.org')
})

async function start () {
  try {
    redirectHttp.listen(HTTP_PORT, () => {
      console.log(`http server run in ${HTTP_PORT} port`);
    })
    https.createServer(httpsOptions, app).listen(PORT, () => {
      console.log(`Server is running on ${PORT} port`)
    });
  }
  catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()