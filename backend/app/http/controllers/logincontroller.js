const session = require('express-session')
const User = require('../../../models/user')
const passport = require("passport")
function logincontroller() {
    return {
        async postlogin(req, res, next) {
            const { email, password } = req.body
            const userExists = await User.exists({ email: email });
            if (userExists) {
                User.findOneAndUpdate({ email: email }, { authenticated: true }, { new: true })
                    .then(res.send("LoggedIn successfully."))
                res.send("User")
            }
            else {
                return res.send("Email is not registered.");
            }
            // passport.authenticate('local', (err, user, info) => {
            //     if (err) {
            //         res.send(info.message)
            //         return next(err)
            //     }
            //     if (!user) {
            //         res.send(info.message)
            //         return res.redirect('/login')
            //     }
            //     req.logIn(user, (err) => {
            //         if (err) {
            //             res.send(info.message)
            //             return next(err)
            //         }
            //         res.send("LoggedIn successfully.")
            //     })
            // })(req, res, next)
        },
        postlogout(req, res, next) {
            req.logout(function (err) {
                if (err) { return next(err); }
                res.redirect('/login');
            });
        }
    }
}

module.exports = logincontroller