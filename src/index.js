const express = require('express');
const app = express();

require('../db/mongoose');

const items = require('../api/item');
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('TODO LIST');
})

app.use('/api/items',items);

app.listen(PORT,()=>{
    console.log(`Server listening on http://localhost:${PORT}`);
})