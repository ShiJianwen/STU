var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes');

var app = express();
var server = http.createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app')));
app.use(app.router);

//设置跨域访问  
app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE");  
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
}); 

app.get('/', routes.index);

//学院接口
app.post('/department', routes.addDept);
app.get('/departments', routes.getDept);
app.get('/department/:dno', routes.getOneDept);
app.delete('/department/:dno', routes.deleteDept);
app.put('/department/:dno', routes.rewriteDept);

//学生接口
app.post('/student', routes.addStu);
app.get('/students', routes.getStu);
app.get('/student/:sno', routes.getOneStu);
app.delete('/student/:sno', routes.deleteStu);
app.put('/student/:sno', routes.rewriteStu);

//教职工接口
app.post('/teacher', routes.addTech);
app.get('/teachers', routes.getTech);
app.get('/teacher/:tno', routes.getOneTech);
app.delete('/teacher/:tno', routes.deleteTech);
app.put('/teacher/:tno', routes.rewriteTech);

//课程接口
app.post('/course', routes.addCourse);
app.get('/courses', routes.getCourse);
app.delete('/course/:cno', routes.deleteCourse);
app.put('/course/:cno', routes.rewriteCourse);


//选课接口
app.post('/sc', routes.addSC);
app.get('/sc', routes.getSC);
app.get('/onesc/:sno', routes.getOneSC);
app.delete('/sc/:sno/:cno', routes.deleteSC);
app.put('/sc/:sno/:cno', routes.rewriteSC);

//成绩接口
app.post('/grade', routes.addGrade);
app.get('/grade', routes.getGrade);
app.delete('/grade/:sno/:cno', routes.deleteGrade);
app.put('/grade/:sno/:cno', routes.rewriteGrade);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});

server.listen(18080, function() {
    console.log('This server is listening at http://localhost:18080');
});

module.exports = app;
