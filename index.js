const express = require('express');
const app = express();
const PORT = 3000;

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What do you call fake spaghetti? An impasta!",
  "Why did the bicycle fall over? Because it was two-tired!"
];

app.use(express.static('public'));

// const {MONGO_URI} = require("./config/config")

// mongoose.connect(`mongodb://disu:mypass@mongo:27017/?authSource=admin`).then(()=>console.log("Successfully connected to DB")).catch((e)=>console.log(e))

app.get('/', (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.send(`
    <html>
      <head>
        <title>Joke Generator</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <div class="container">
          <h1>😂 The Joker</h1>
          <p>${randomJoke}</p>
          <button onclick="window.location.reload()">Another One</button>
        </div>
      </body>
    </html>
  `);
});

const port = process.env.PORT || 5000
app.listen(5000, '0.0.0.0', () => {
  console.log("Server is running on port 5000");
});