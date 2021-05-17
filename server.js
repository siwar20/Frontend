const express = require('express');

const app = express();

app.use(express.static('./dist/constounsi'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/constounsi/'}),
);

app.listen(process.env.PORT || 9800);