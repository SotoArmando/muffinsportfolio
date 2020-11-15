const express = require('express');
const path = require('path');
const app = express();

// Allow dotfiles - this is required for verification by Lets Encrypt's certbot
app.use(express.static(path.join(__dirname, 'build'), {dotfiles: 'allow'}));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000);