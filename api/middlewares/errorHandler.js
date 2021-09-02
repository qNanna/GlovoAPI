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
  res.status(err.status || 500);
  return res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
}

export { errorRoute, errorHandler };
