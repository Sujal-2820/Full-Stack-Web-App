const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;



passport.use(new GoogleStrategy({
    clientID: '323558499472-3btd73gnq8a4tb0d2t94q2mnedlb9dme.apps.googleusercontent.com',
    clientSecret: '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',
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
