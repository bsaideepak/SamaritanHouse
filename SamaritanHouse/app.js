var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var workerController = require('./routes/workerController');
var jobInfo = require('./routes/jobsController');
var skillsList = require('./routes/skillsController');

var app = express();
var http = require('http')


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Headers', '*');

    next();
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(allowCrossDomain);
app.set('port', 8000);

app.get('/',controller.homepage);
app.get('/wRegister',controller.workerRegister);
app.get('/eRegister',controller.employeeRegister);
app.get('/eLogin',controller.eLogin);

//app.get('/getWorkerInfo', controller.getWorkerInfo);
app.post('/newWorker', controller.newWorker);
//app.post('/register',controller.register);
app.get('/v1/wrc/workers',controller.getWorkers);
app.get('/dashboard',controller.getDashboard);

// Job API's
app.get('/v1/wrc/job', jobInfo.getJobs);
//app.post('/v1/wrc/job', jobInfo.submitJob);
app.get('/v1/wrc/job/:id', jobInfo.getJob);
//app.put('/v1/wrc/job/:id', jobInfo.udpateJob);
//app.delete('/v1/wrc/job/:id', jobInfo.deleteJob);

//Skill API's
app.get('/v1/wrc/skills', skillsList.getSkills);
app.get('/v1/wrc/skill/:id', skillsList.getSkill);
app.post('/v1/wrc/skills/', skillsList.addSkill);
app.put('/v1/wrc/skills/:id', skillsList.updateSkill);
//app.delete('/v1/wrc/skills/:id', skillsList.deleteSkill);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
