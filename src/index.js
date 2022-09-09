const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
require('../db/mongoose');
const items = require('../api/item');
const AuthenticateToken = require('../middleware/user_auth');
const { response } = require('../utility/utils');
const { DUMMY_USER, SECRET_KEY, ERROR_MESSAGE } = require('../constant/constant');
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('TODO LIST');
})

// To get token for API Auth.
app.get('/api/login', response((req, res) => {

    jwt.sign({ user: DUMMY_USER }, SECRET_KEY, { expiresIn: '55s' }, (err, token) => {
        if (err)
            res.status(500).send(ERROR_MESSAGE.INTERNAL_SERVER_ERROR);
        res.send({ token });
    });
}))

// Add Token Verification Middleware.
app.use(AuthenticateToken);

// Add TODO list items Routes.
app.use('/api/items', items);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})
