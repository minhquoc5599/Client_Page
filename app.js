var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs=require('express-handlebars');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var compairRouter = require('./routes/compair');
var contactRouter = require('./routes/contact');
var editprofieRouter = require('./routes/edit_profie');
var faqRouter = require('./routes/faq');
var forgetpassRouter = require('./routes/forgetpass');
var legalRouter = require('./routes/legal_notice');
var loginRouter = require('./routes/login');
var detailsRouter = require('./routes/product_details');
var summaryRouter = require('./routes/product_summary');
var productsRouter = require('./routes/products');
var historyRouter = require('./routes/purchase_history');
var registerRouter = require('./routes/register');
var specialRouter = require('./routes/special_offer');
var tacRouter = require('./routes/tac');


var app = express();

// view engine setup
app.engine('hbs',hbs({extname:'hbs',defaultLayout:'layout',layoutsDir:__dirname+'/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/compair', compairRouter);
app.use('/contact', contactRouter);
app.use('/edit_profie', editprofieRouter);
app.use('/faq', faqRouter);
app.use('/forgetpass', forgetpassRouter);
app.use('/legal_notice', legalRouter);
app.use('/login', loginRouter);
app.use('/product_details', detailsRouter);
app.use('/product_summary', summaryRouter);
app.use('/products', productsRouter);
app.use('/purchase_history', historyRouter);
app.use('/register', registerRouter);
app.use('/special_offer', specialRouter);
app.use('/tac', tacRouter);


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

module.exports = app;
