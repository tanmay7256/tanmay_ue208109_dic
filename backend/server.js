const express = require('express');
const cors = require('cors');
const path = require('path')
const app = express();
const mongoose = require('mongoose');
const session = require('express-session') // to use session
const MongoDbStore = require('connect-mongo')(session) //to store session in database its like a predefined schema 
const passport = require('passport')

const port = process.env.PORT || 4000
const mongo_connection = require('./mongo_connection')
const course = require('./models/Course');
app.use(cors())
mongo_connection();
// Session store
let mongoStore = new MongoDbStore({
    mongooseConnection: mongoose.connection,
    collection: 'sessions'
})

app.use(session({
    secret: "Har Har Mahadev",
    resave: false,
    store: mongoStore,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 24 hour
}))

// Passport config y hmesha sessions k baad hi hona chaiye 
app.use(passport.initialize())
app.use(passport.session())
const passportInit = require('./app/config/passport')
passportInit(passport)
app.use(express.json());
require('./routes/web.js')(app);
app.get('/', async (req, res) => {
    res.send("jiii")
});
app.get('/courses', async (req, res) => {
    const cs = await course.find()
    res.send(cs);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
