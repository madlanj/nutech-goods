var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var fs = require('fs');

let authRouter = require('./app/api/auth/router');
let goodsRouter = require('./app/api/goods/router');

const URL = `/api/v1`;
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use((req,res,next)=> {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE');
  res.header("Access-Control-Allow-Credentials", 'true');
  res.header("Access-Control-Allow-Headers", 'Content-Type, Authorization');
  next();
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
app.get("/public/:folder/:file", async (req,res,next)=> {
  console.log(req.url,"URLL")
  let paths = path.resolve(path.join(__dirname,req.url))
  console.log(paths)

  if (fs.existsSync(paths)) {
      fs.readFile(paths, (err, data) => {
          if (err) {
              next(err) // Pass errors to Express.
          } else {
              res.sendFile(paths)
          }
      })
  }else{
      next()
  }
})

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.get('/', (req, res) => {
//   res.json({message: 'Welcome to API Nutech Goods'})
// })
app.use(`${URL}`, authRouter);
app.use(`${URL}`, goodsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}



module.exports = app;
