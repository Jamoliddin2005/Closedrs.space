const express = require('express')
const bcrypt = require('bcrypt')
require('dotenv').config()
const cors = require('cors')
const session = require('express-session')
const initializePassport = require('./middleware/passport')
require('./helper/db')()
const passport = require('passport')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))



app.use(passport.initialize())
app.use(passport.session())

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

const AuthRoute = require('./routes/auth')

app.use("/auth", AuthRoute)

app.listen(process.env.PORT || 5001, () => {
    console.log(`Server listening on ${process.env.PORT}`);
})