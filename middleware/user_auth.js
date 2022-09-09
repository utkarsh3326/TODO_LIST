const jwt = require('jsonwebtoken');

const { DUMMY_USER, ERROR_MESSAGE, SECRET_KEY } = require('../constant/constant');

// Method to check if request header has valid token.
async function auth(req, res, next) {
    const bearerHeader = req.headers.authorization;
    if (!bearerHeader) {
        return res.status(401).send(ERROR_MESSAGE.ACCESS_DENIED);
    }
    const token = bearerHeader.split(' ')[1];

    // Verify token.
    await jwt.verify(token, SECRET_KEY, function (err, decoded) {
        if (err || !decoded || decoded.user.id != DUMMY_USER.id)
            return res.status(401).send(ERROR_MESSAGE.ACCESS_DENIED);
        // Set decoded user details in request. 
        req.user = decoded.user;
        next();
    });
}

module.exports = auth;
