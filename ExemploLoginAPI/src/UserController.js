const User = require('./User');
const env = require('../.env');
const jwt = require('jsonwebtoken');

function login(req, res) {

    var email = req.body.email;
    var password = req.body.password;

    console.log(email, env.authSecret);

    User.findOne({email}, (error, user)=>{
        if (user && password === user.password) {
            const token = jwt.sign({user}, env.authSecret, {
                expiresIn: "1 min",
            });
            const { name, email } = user;
            res.json({ name, email, token });
        } else {
            res.sendStatus(400);
        }
    });
}

module.exports = {
    login
}
