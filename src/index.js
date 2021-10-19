const express = require('express');
var favicon = require('serve-favicon');
const xwiki = require('./xwiki');
const path = require('path');
const app = express();
const port = 9090;



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html')
  })

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

app.use(favicon(path.join(__dirname, 'public', './favicon.ico')))

app.get('/rest/:space/:name', async (req, res) => {
  try {
      const xwikiDoc = await xwiki.getDocument(`${req.params.space}.${req.params.name}`)
      return res.json(xwikiDoc);
  } catch (error) {
      //console.log(error);
      return res.status(500).json({error: 'Somthing went wrong'})
  }
});

//const xwikiDoc = async () => {await xwiki.getDocument(`${req.params.space}.${req.params.name}`)};

