const express = require("express");

const session = require('express-session');
const passport = require('passport');
require('dotenv').config();
require("./db/conn");
require('./config/passport');
const authRoutes = require('./routes/auth');
const cors = require("cors");
const cookiparser = require("cookie-parser");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookiparser());


app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


app.use('/api/auth', authRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});