const { ERROR_MESSAGE } = require('../constant/constant');

// Common Method to handle unexpected error in all api routes.
function response(callback) {
    return async (req, res) => {
        try {
            console.log(` Inside API [${req.method}][${req.baseUrl + req.path}]`)
            await callback(req, res);
        } catch (err) {
            console.error(`[${req.method}][${req.baseUrl + req.path}] Some Error `, err.message);
            res.status(500).send(ERROR_MESSAGE.INTERNAL_SERVER_ERROR);
        }
    };
}

module.exports = {
    response
};