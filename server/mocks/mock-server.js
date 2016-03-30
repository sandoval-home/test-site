/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var mockServerRouter = express.Router();

  mockServerRouter.get('/', function(req, res) {
    res.send({
      'mock-server': []
    });
  });

  // mockServerRouter.post('/', function(req, res) {
  //   res.status(201).end();
  // });

  // mockServerRouter.get('/:id', function(req, res) {
  //   res.send({
  //     'mock-server': {
  //       id: 'ugh'
  //     }
  //   });
  // });

  // mockServerRouter.put('/:id', function(req, res) {
  //   res.send({
  //     'mock-server': {
  //       id: req.params.id
  //     }
  //   });
  // });

  // mockServerRouter.delete('/:id', function(req, res) {
  //   res.status(204).end();
  // });

  mockServerRouter.get('/results', function(req, res) {
    res.send({
      'results': [
          { id: 1, name: 'Result 1'},
          { id: 2, name: 'Result 2'},
          { id: 3, name: 'Result 3'}
      ]
    });
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/mock-server', require('body-parser').json());
  app.use('/api', mockServerRouter);
};
