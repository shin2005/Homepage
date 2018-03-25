module.exports = function(app) {
  app.use('/users', require('./controllers/users'));
};
