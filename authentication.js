const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;



passport.use(new GoogleStrategy({
    clientID: 'Client_ID',
    clientSecret: 'ClientSecret',
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    //register user here

    console.log(profile);
    // cb(null, profile);
    cb(null, profile);

  }
));

passport.serializeUser(function(user, done){
    done(null, user);
});

passport.deserializeUser(function(user, done){
    done(null, user);
})
