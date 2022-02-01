import { Router } from 'express'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

import createHash from '../../utils/createHash.js'
import path from 'path'
import User from '../../models/User.js'
import isValidPassword from '../../utils/isValidPassword.js'

const authWebRouter = new Router()

authWebRouter.get('/', (req, res) => {
    res.redirect('/home')
})

passport.use('login', new LocalStrategy((username, password, done) => {
    User.findOne({ email: username }, (error, user) => {
        console.log({user});
        if (error)
            return done(error);
    
        if (!user) {
            console.log('User Not Found with username ' + username);
            return done(null, false);
        }
    
        if (!isValidPassword(user, password)) {
            console.log('Invalid Password');
            return done(null, false);
        }

        console.log({error, user});
        return done(null, {});
    })
}));

authWebRouter.get('/login', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/')
    } else {
        res.sendFile(path.join(process.cwd(), '/views/login.html'))
    }
});

authWebRouter.get('/faillogin', (req, res) => {
res.render( 'pages/login-error.ejs')
});

authWebRouter.get('/signup', (req, res) => {
res.render( 'pages/signup.ejs')
});

authWebRouter.get('/failsignup', (req, res) => {
    res.render( 'pages/signup-error.ejs')
    });


authWebRouter.get('/logout', (req, res) => {
    req.logout();

    req.session.destroy((err) => {
        if (err) return res.json({ error: err });

        res.redirect('/login');
    });
});

passport.use('signup', new LocalStrategy(
    { passReqToCallback: true },
    (req, email, password, done) => {
    User.findOne({ email: email }, (error, user) => {
        if (error) {
            console.log('Error in SignUp: ' + error);
            return done(error);
        }
        
        if (user) {
            console.log('User already exists');
            return done(null, false)
        }
        
        const newUser = {
            email: email,
            password: createHash(password),
            name: req.body.name,
            address: req.body.address,
            age: req.body.age,
            phone: req.body.phone,
        };
        User.create(newUser, (error, userCreated) => {
            if (error) {
                console.log('Error in Saving user: ' + error);
                return done(error);
            }
            console.log(user)
            console.log('User Registration succesful');
            return done(null, userCreated);
        });
    })
}))

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

authWebRouter.post(
    '/auth/local',
    passport.authenticate('login', { successRedirect:'/home', failureRedirect: '/faillogin'}));

authWebRouter.post(
    '/signup/local',
    passport.authenticate('signup', { successRedirect:'/home', failureRedirect: '/failsignup'}));


export default authWebRouter