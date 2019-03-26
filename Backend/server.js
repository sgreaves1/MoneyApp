// TODO: Create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
const nconf = require('nconf');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var lodash = require('lodash');
var Database = require('./Database');
var port = process.env.PORT || 4000;
var collection = 'accounts';


nconf.argv({
    'MONGODB_URL':{
        alias: 'mongodb-url',
        describe: 'URL for mongo database',
        demand: false
    }}
)
    .env()
    .defaults({
        'MONGODB_URL':'mongodb://localhost:27017/moneyapp'
    });

var database = new Database("moneyapp", nconf.get('MONGODB_URL'));

// express.static will serve everything 
// with in client as a static resource
// also, it will server the index.html on the 
// root of that directory on a GET to '/'
app.use(express.static(__dirname));

// body parser makes it possible to post JSON to the server 
// we can access dat we post on as req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

database.CreateCollection("accounts");

// TODO: make the REST routes to perform CRUD on lions
app.get('/accounts', (req, res) => database.GetAllForCollection("accounts", (result) => {res.json(result);}));

app.get('/addaccount', (req, res) => res.sendFile(__dirname + '/addaccount.html'));

app.get('/account/:id', (req, res) => {console.log('accounts'); database.Get("accounts",req.params.id, (result) => {res.json(result);})});

app.get('/deleteaccount/:id', (req, res) => {console.log('delete'); database.Delete(collection, req.params.id), (result) => {console.log("returned");}});

app.post('/accounts', (req, res) => {
    database.Create("accounts", req.body);
    res.redirect('/accounts');
});

app.listen(port, '0.0.0.0', () => console.log('server listening on http://localhost:', port));




