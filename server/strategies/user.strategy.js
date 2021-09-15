let passport = require('passport');
let localStrategy = require('passport-local').Strategy;
let pool = require('../modules/pool');

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
  pool.query('SELECT * FROM "user" WHERE id = $1', [id])
  .then((result) => {
    const user = result && result.rows && result.rows[0];
    
    if (user) {
      delete user.password; //removes password so it doesn't get sent
      done(null, user);
    }
  })
  .catch((error) =>{
    console.log(`Error with query while deserializing user: ${error}`);
  });
});

passport.use('local', 
new localStrategy((username, password, done) => {
  console.log(`Trying to login`);
  pool.query(`SELECT * FROM "user" WHERE username = $1`, [username])
  .then(result => {
      const user = result && result.rows && result.rows[0];

      if (user && password === user.password) {
        done(null, user);
      } else {
        done(null, null);
      }
    })
    .catch(error => {
      console.log(`Error with query for user: ${error}`) ;
      done(error, null);
    })
  }
))

module.exports = passport;