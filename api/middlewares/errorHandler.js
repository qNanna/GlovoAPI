function errorRoute(req, res, next) {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
}

// eslint-disable-next-line max-params
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  return res.status(err.status || 500).send({
    error: {
      message: err.message,
    },
  });
}

export { errorRoute, errorHandler };
