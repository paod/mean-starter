module.exports = function(app) {
  app.get('/api/test', function(req, res) {
    res.send({ message: "server api test working!"});
  });

  // undefined server API routes will return 404
  app.get('/api/v1/*', function(req, res) {
    res.send(404);
  });
  
  // any other routes will be redirected to Angular router
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });
};