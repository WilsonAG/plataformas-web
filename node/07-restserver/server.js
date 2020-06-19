const express = require('express');
require('./config/env');

const app = express();

app.get('/user', (req, res) => {
    res.json('Get user')
});
app.post('/user', (req, res) => {
    res.json('Post user')
});
app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    res.json({ 'user': id })
});
app.delete('/user', (req, res) => {
    res.json('Delete user')
});

app.listen(process.env.PORT, () => {
    console.log(`The server is running at http://localhost:${process.env.PORT}`)
});