// MIDDLEWARE PARA MANEJAR ERRORES

function logErrors(err, req, res, next) {
  console.log('errarrrr');
  console.log(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log('otro errarrrr');
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

module.exports = { logErrors, errorHandler }
