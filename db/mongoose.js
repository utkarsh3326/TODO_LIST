const mongoose = require('mongoose')

const db = 'mongodb://localhost:27017/test';

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(`Connected to db....`))
.catch(err => console.log('Could not connect to database, error ',err));


