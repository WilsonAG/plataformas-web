const express = require('express');

const app = express();

const port = 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    // console.log(req)
    res.send({
        name: 'Will',
        lastname: 'AG',
        url: req.url
    });
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page with Express</h1>');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});
