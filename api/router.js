module.exports = function(app) {
  app.use('/users', require('./controllers/users'));
  app.use('/feeds', require('./controllers/feeds'));
};
