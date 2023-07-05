const logincontroller = require('../app/http/controllers/logincontroller.js')
const registercontroller = require('../app/http/controllers/registercontroller.js')
const User = require("../models/user")
function inroutes(app) {
    app.post('/postregister', registercontroller().postregister)
    app.post('/postlogin', logincontroller().postlogin)
    app.post('/postprofile', async (req, res) => {
        const user = await User.findOne({ email: req.body.email });
        res.send(user)
    })

}

module.exports = inroutes

