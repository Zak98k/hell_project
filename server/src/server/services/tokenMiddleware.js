const jwt = require('jsonwebtoken');
const tokenSalt = require('./salt/salt').tokenSalt;

module.exports.verification=(req, res, next) => {

    const checkToken = (req, res, next) => {

        let token = req.headers['x-access-token'] || req.headers['authorization'];
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }

        if (token) {
            jwt.verify(token, tokenSalt, (err, decoded) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'Token is not valid'
                    });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.json({
                success: false,
                message: 'Auth token is not supplied'
            });
        }
    };
console.log("checkToken")

       return  checkToken;


}