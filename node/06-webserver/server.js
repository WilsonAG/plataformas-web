const express = require('express');
const hbs = require('hbs');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.set('view engine', 'hbs');

hbs.registerPartials('views/partials');

require('./hbs/helpers');

app.get('/', (req, res) => {
    // console.log(req)
    res.render('home', {
        name: 'Will',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});
