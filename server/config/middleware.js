var routes = require('./routes.js');
var bodyParser = require('body-parser');
var request = require('request');



module.exports = function (app, express) {
  
  //parse json
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  //serve index
  app.use(express.static(__dirname + '/../../client'));
  
  //routes for client
  var usersRouter = express.Router();
  var questionsRouter = express.Router();
  var answersRouter = express.Router();
  var authRouter = express.Router();
  var graphRouter = express.Router();
  var seedRouter = express.Router();

  app.use('/api/users', usersRouter);
  app.use('/api/questions', questionsRouter);
  app.use('/api/answers', answersRouter);
  app.use('/auth', authRouter);
  app.use('/api/graph', graphRouter);
  app.use('/api/seed', seedRouter);


  // inject routes
  require('../users/usersRoutes.js')(usersRouter);
  require('../questions/questionsRoutes.js')(questionsRouter);
  require('../answers/answersRoutes.js')(answersRouter);
  require('../auth/authRoutes.js')(authRouter);
  require('../graph/graphRoutes.js')(graphRouter);
  require('../seed/seedRoutes.js')(seedRouter);


};