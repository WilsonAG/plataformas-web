const jwt = require('jsonwebtoken');

// ========================================
//                 checkToken
// ========================================
const checkToken = (req, res, next) => {
  const token = req.get('token');

  jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
    if (err)
      return res.status(401).json({
        ok: false,
        err: {
          msg: 'No autorizado.',
        },
      });

    req.user = data.user;

    return next();
  });
};

const onlyAdmin = (req, res, next) => {
  if (req.user.role !== 'ADMIN_ROLE') {
    return res.status(401).json({
      ok: false,
      err: {
        msg: 'No tiene permisos para realizar esta accion.',
      },
    });
  }

  return next();
};

module.exports = {
  checkToken,
  onlyAdmin,
};
