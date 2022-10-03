require('dotenv').config()
const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = process.env
const passport = require('passport')
const User = require('../models/user/user')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "https://localhost:3001/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
   // });
  }
));

passport.serializeUser( function(user, done){
    done(null, user)
})

passport.deserializeUser( function(user, done){
  done(null, user)
})
