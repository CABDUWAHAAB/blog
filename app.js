const path = require('path');
const express = require('express');
const blogRouter = require('./routes/blogRoutes');
const viewRouter = require('./routes/viewRoutes');

const app = express();

app.use(express.json({limit: '10kb'}));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', viewRouter);
app.use('/api/v1/blogs', blogRouter);

module.exports = app;