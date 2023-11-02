// Import express package
const express = require('express');

const json = require('./db/db.json');

const fs = require('fs');
// Require the JSON file and assign it to a variable called `termData`

const path = require('path');

const PORT = process.env.PORT || 3001;

// Initialize our app variable by setting it to the value of express()
const app = express();

app.use(express.json())

app.use(express.static('public')); 




app.get('/notes', (req, res) =>  {
  console.log("bobo the hobo")
  res.sendFile(path.join(__dirname + '/public/notes.html'));
});

app.get('/api/notes', (req, res) =>  {
  console.log("bobo the mobo")
  res.sendFile(path.join(__dirname + '/db/db.json'));
});

app.post('/api/notes', (req, res) =>  {
  console.log(req.body)
  json.push(req.body);
console.log(json);
  // console.log(module);

 // res.sendFile(path.join(__dirname + '/db/db.json'));

  fs.writeFile('./db/db.json', JSON.stringify(json), (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(200);
  });
});


// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/public/index.html'));
// });


// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

app.get('/index', (req, res) => res.json(termData));

app.get('/', (req, res) => res.send(`(Visit http://localhost:${PORT}/api`));

// res.json() allows us to return JSON instead of a buffer, string, or static file
app.get('/api', (req, res) => res.json(termData));

// require('/db/db.json')(app);

// require('/api/notes.html')(app);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)


);

