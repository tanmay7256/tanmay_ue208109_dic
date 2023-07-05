const User = require("../../../models/user")
const bcrypt = require('bcrypt')
function registercontroller() {
    return {
        async postregister(req, res) {
            let { name, email, password, dob } = req.body
            const userExists = await User.exists({ email: email });
            if (userExists) {
                return res.send("Email already registered.");
            }
            const hashedpassword = await bcrypt.hash(password, 10)
            // Create a user 
            const user = new User({
                name,
                email,
                password: hashedpassword,
                dob
            })

            user.save().then((user) => {
                // Login
                return res.send("User registered Successfully.")
            }).catch(err => {
                return res.send('Something went wrong')
            })
        }
    }
}

module.exports = registercontroller