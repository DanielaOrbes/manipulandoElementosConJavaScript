const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();

//routers

const indexRouter = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');

//api routers

const apiMoviesRouter = require('./routes/api/movies')
const apiGenresRouter = require('./routes/api/genres')
const apiActorsRouter = require('./routes/api/actors')


// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);

//api routers set

app.use('/api/movies',apiMoviesRouter);
app.use('/api/actors',apiActorsRouter);
app.use('/api/genres',apiGenresRouter);

// port

app.listen('3020', () => console.log('Servidor corriendo en el puerto 3020'));
