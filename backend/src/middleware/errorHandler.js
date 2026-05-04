function notFoundHandler(req, res) {
  res.status(404).json({
    error: {
      message: `Route ${req.method} ${req.originalUrl} was not found`,
      code: 'NOT_FOUND',
    },
  });
}

function errorHandler(err, req, res, next) {
  const status = err.statusCode || err.status || 500;

  if (process.env.NODE_ENV !== 'test') {
    console.error(err);
  }

  res.status(status).json({
    error: {
      message: status === 500 ? 'Internal server error' : err.message,
      code: err.code || 'INTERNAL_ERROR',
      details: err.details,
    },
  });
}

module.exports = {
  errorHandler,
  notFoundHandler,
};
