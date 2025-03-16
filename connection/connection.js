const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://127.0.0.1:27017/NotePad');


connection.then(()=>{
    console.log('Connected Database')
})
connection.catch((err)=>{
    console.log(err);
})



module.exports = connection;