const express = require('express');

const app = express();

app.post('/send', (req, res) => {
    let content = req.body;
    console.log(content);
    res.send('Deu certo');
});

app.listen(3001, () => {
    console.log('Server is running on port 3000');
});