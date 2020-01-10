const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname + '/dist')); <- 'Not found'
// app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));


app.get('/app/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// console.log(`Listening on port ${port}`)
app.listen(port);