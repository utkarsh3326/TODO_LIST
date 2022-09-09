// Common Error Message.
const ERROR_MESSAGE = {
    INVALID_INPUT: 'Invalid Input',
    ITEM_NOT_FOUND: 'Item Not Found',
    ACCESS_DENIED: 'Access Denied',
    INTERNAL_SERVER_ERROR: 'Internal Server Error'
};

// Dummy user for jwt token. 
const DUMMY_USER = {
    id: 'u123',
    name: 'dummy',
    email: 'dummy123@gmail.com'
};

// Secret key for jwt token.
const SECRET_KEY = 'SECRET_KEY';

module.exports = {
    DUMMY_USER,
    ERROR_MESSAGE,
    SECRET_KEY
};