const mongoose = require('mongoose')

// MongoDB local host URL.
const db = 'mongodb://localhost:27017/test';

// Connect MongoDB locally.
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log(`Connected to db....`)).catch(err => console.log('Could not connect to database, error ', err));
