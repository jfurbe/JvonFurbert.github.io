const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const basicRouter = express.Router();


basicRouter.route('/')
.get((req, res)=> {
   console.log('happy day')
   // res.type('text/plain')
   res.send( 'Server Expresso ')
   //res.render('index', { title: 'Express' });
});

basicRouter.route('/about')
.get((req, res)=> {
   res.type('text/plain')
   res.send('Server Expresso About')
  // res.render('index', { title: 'Express' });
});

basicRouter.use((req, res)=> {
   res.type ('text/plain/')
   res.status(404)
   res.send('404 Not found _')
});

module.exports = basicRouter;