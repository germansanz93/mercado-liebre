//requires
const path = require('path');
const express = require('express');

//running express function
const app = express();

//setting the server's port
const PORT = 3000;

//path to statics
const publicPath = path.join(__dirname, '/public');

//use statics from public dir
app.use(express.static(publicPath));

//home route
app.get("/", (req, res) => {
  const homePath = path.join(__dirname, '/views/home.html');
  res.sendFile(homePath);
})

app.get("/register", (req, res) => {
  const registerPath = path.join(__dirname, '/views/register.html');
  res.sendFile(registerPath);
})

app.get("/signin", (req, res) =>{
  const signinPath = path.join(__dirname, '/views/signin.html');
  res.sendFile(signinPath);
})

//server start listening
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
})