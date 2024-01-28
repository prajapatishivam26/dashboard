const cors = require("cors");
const express = require('express');
const app = express();
const port = 3000;
const connectDB = require("./db/db");
//const authRoutes = require('./routes/auth');
const bodyParser = require('body-parser');
const routeRoutes = require('./routes/route');



connectDB()

app.use(bodyParser.urlencoded({ extended: true }));
// Middleware
app.use(bodyParser.json());

// Routes
//  app.use('/auth', authRoutes);
app.use('/', routeRoutes);


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", 'http://localhost:5173');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, this is your Node.js backend!');
});


// app.use(cors(
//   {
//     origin: "*",
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
//   }
// ));

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});