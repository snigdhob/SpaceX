const express = require('express');

const app = express();

console.log('Running');

app.use(express.static('./dist/SpaceX'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/SpaceX/' }),
);

app.listen(process.env.PORT || 8090);