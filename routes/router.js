let express = require('express');
let users = require('../features/users/user.router');
//let log = require('tracer').console({format : "{{message}}  - {{file}}:{{line}}"}).log;
// let verify = require('../server/verify');

module.exports = (app, config, models) => {
  let router = express.Router();

  router.use('/users', users);





  app.use('/api', router);
};
