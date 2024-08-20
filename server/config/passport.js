const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:5000/auth/google/callback',
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const user = await User.findOne({ googleId: profile.id });
      if (user) {
        done(null, user);
      } else {
        const newUser = new User({
          googleId: profile.id,
          email: profile.emails[0].value,
        });
        await newUser.save();
        done(null, newUser);
      }
    } catch (err) {
      done(err);
    }
  }
));

passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await User.findOne({ email: username });
      if (user && await bcrypt.compare(password, user.password)) {
        done(null, user);
      } else {
        done(null, false, { message: 'Invalid credentials' });
      }
    } catch (err) {
      done(err);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
