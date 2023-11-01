// Import express package
const express = require('express');

const fs = require('fs');
// Require the JSON file and assign it to a variable called `termData`

const path = require('path');

const PORT = 3001;

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
  res.sendFile(path.join(__dirname + '/db/db.json'));
  console.log("bobo the gogo")
  fs.writeFile('/db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("big boy mgoy");
  });
});


// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/public/index.html'));
// });


// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

app.get('/index', (req, res) => res.json(termData));

app.get('/', (req, res) => res.send('Visit http://localhost:3001/api'));

// res.json() allows us to return JSON instead of a buffer, string, or static file
app.get('/api', (req, res) => res.json(termData));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)


);
