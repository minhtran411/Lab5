const express = require('express');
const path = require('path');
const bodyParser =  require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send(`Welcome to Data Representation & Querying <br/>
    <a href="/api/books">Books API</a> <br/>
    <a href="/hello/Minh">Say Hello to Minh</a> <br/>
    <a href="/new-route">Goodbye</a> <br/>
    <a href="/test">Input name to form to get a hello from server, GET and POST METHOD</a> <br/>
  `)
})

app.get('/new-route', (req,res) => {
    res.send('Goodbye');
})

//colon to set parameter
app.get('/hello/:name', (req,res) => {
    //params is how you retrive parameter being set above
    res.send('Hello '+req.params.name);
    //console.log(req.path)
})

//get books api
app.get('/api/books', (req, res) => {
    //daclare json data, research to see whether should i put this inside or outside
    const data = {
        "books":[
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
        ]
        };
    //res.json returns json data, can specify status code depends on needs
    res.status(200).json({myBooks:data})
})

//get an html page
app.get('/test', (req,res) => {
    res.sendFile(path.join(__dirname+'/pages/index.html'));
  //__dirname : It will resolve to your project folder.
})

//Get dynamic name through form
app.get('/name', (req,res) => {
    //console.log(req.query.fname)
    //req.query.{id} to get the info back from the query from form => this is depends on id
    res.send('Hello '+req.query.fname+' '+req.query.lname+'!')
})

//post method 
app.post('/name', (req, res) => {
    //req.body stores those info from form query from bodyParser middleware
    res.send('Hello '+req.body.fname+' '+req.body.lname+'!')
    //res.send("Data Received!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})