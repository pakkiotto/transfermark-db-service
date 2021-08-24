const mongoose = require('mongoose');
const mainController = require('./controllers/mainController');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>{
    console.log("connected")
    main();
}).catch(err =>console.log(err));

async function main(){
    console.log("start... " + new Date());
   await mainController.doStuff();
    console.log("end... " + new Date());
    process.exit(1)
};
