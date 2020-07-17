const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const user = require('../models/user');

const app = express();

app.post('/login', (req, res) => {
  let { email, password } = req.body;

  User.findOne({ email: email }, (err, userDB) => {
    if (err)
      return res.status(500).json({
        ok: false,
        err,
      });

    if (!userDB)
      return res.status(401).json({
        ok: false,
        err: {
          msg: 'Credenciales no validas (email)',
        },
      });

    if (!bcrypt.compareSync(password, userDB.password))
      return res.status(401).json({
        ok: false,
        err: {
          msg: 'Credenciales no validas (pass)',
        },
      });

    const token = jwt.sign({ user: userDB }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({
      ok: true,
      userDB,
      token,
    });
  });
});

module.exports = app;
