// require statements
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");

// storing environment variables in .env file
require('dotenv').config();

//create express server
const app = express();
const PORT = process.env.PORT || 3001;


// middlewear
app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true
}));

// app.use(express.urlencoded({ extended: true }));
// parse json - server will send & recieve json
app.use(express.json());



// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.once('open', () => {
    console.log("MongoDB database connection successful")
})

// Start the server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;