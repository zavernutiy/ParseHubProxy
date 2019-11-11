const express = require('express');
const request = require('request');

const port = 8000;
const app = express();

app.use('/proxy/*', function(req, res) {
    const url = req.params[0];
    const isPost = req.method === 'POST';
    const redirectRequest = isPost ? request.post(url) : request(url);
  
    req.pipe(redirectRequest).pipe(res);
  });

app.listen(port, () => {
    console.log(`Express app listening on port ${port}!`);
});