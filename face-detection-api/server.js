const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex =require('knex');
const morgan =require('morgan');

const signin = require('./controllers/signin');
const register = require('./controllers/register');
const profile = require('./controllers/profile');
const image = require('./controllers/image');


const db = knex({
  client: 'pg',
  connection: process.env.POSTGRES_URI
  // {
  //   host : process.env.POSTGRES_HOST,
  //   user : process.env.POSTGRES_USER,
  //   password : process.env.POSTGRES_PASSWORD,
  //   database : process.env.POSTGRES_DB
  // }
});
	
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.get('/', (req,res)=> {
	res.send('it is working!');
})

app.post('/signin', (req,res) => { signin.handleSignin(req, res, db, bcrypt) })

app.post('/register', (req,res) => { register.handleRegister(req, res, db, bcrypt) }) 

app.get('/profile/:id', (req,res) => { profile.handleProfileGet(req, res, db) })

app.put('/image', (req,res) => { image.handleImage(req, res, db) })

app.post('/imageurl', (req,res) => { image.handleApiCall(req, res) })


app.listen(8080, ()=> {
	console.log('app is running on port 8080');
})


/*
/ --> res = this is working
/ signin --> POST request = success/fail
/ register --> POST = user
/ profile/:userId --> GET = user
/ image --> PUT --> user (how mayn face detected rank)


*/