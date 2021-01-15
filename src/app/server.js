//Install express server
const express = require('express');
const path = require('path');

const app = express();
const cors = require('cors');

// Serve only the static files form the dist directory
app.use(cors());
app.use(express.static('.dist/ziptube-demo'))

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname, './../dist/ziptubefrontend/index.html'));
  console.log('path', path.join(__dirname, './../dist/ziptubefrontend/index.html'))
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
