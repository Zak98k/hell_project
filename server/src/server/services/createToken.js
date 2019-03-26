const jwt = require('jsonwebtoken');
const tokenSalt = require('./salt/salt').tokenSalt;


module.exports.createToken = (req, res, next) => {
    Users.findOne({where: {email: req.body.email}}).then(user => {
        let config = {
            payload: {
                id: user.id,
                email: user.email
            },
            tokenSalt:tokenSalt,
            expiresIn:'12h'
        };
        const token=jwt.sign(config.payload,config.tokenSalt,config.expiresIn );
        return token;
    })

};
