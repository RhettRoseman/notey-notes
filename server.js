// Import express package
const express = require('express');

const json = require('./db/db.json');
// collects fs and connects the fs module to the page
const fs = require('fs');

// Require the JSON file and assign it to a variable called `termData`

const path = require('path');

// sets up localserver to be pushed to heroku from github server
const PORT = process.env.PORT || 3001;

// Initialize our app variable by setting it to the value of express()
const app = express();

app.use(express.json())

app.use(express.static('public')); 



// connects notes.html to index.html 
app.get('/notes', (req, res) =>  {
  console.log("bobo the hobo")
  res.sendFile(path.join(__dirname + '/public/notes.html'));
});

app.get('/api/notes', (req, res) =>  {
  console.log("bobo the mobo")
  res.sendFile(path.join(__dirname + '/db/db.json'));
});
// posts api notes
app.post('/api/notes', (req, res) =>  {
  console.log(req.body) // user info showed in console
  json.push(req.body); // user info connected to ./db/db.json
console.log(json);
  
// "pushes" line 35 to the JSON array in a string and pushes that to the db.json array
  fs.writeFile('./db/db.json', JSON.stringify(json), (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(200); // shows saved info to user 
  });
});

app.get('/index', (req, res) => res.json(termData));

app.get('/', (req, res) => res.send(`(Visit http://localhost:${PORT}/api`));

app.get('/api', (req, res) => res.json(termData));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)


);

