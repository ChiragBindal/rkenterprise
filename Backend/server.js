const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({path : './config.env'});


const DB = process.env.DATABASE_URL.replace('<password>' , process.env.DATABASE_PASSWORD);

// Connecting to database
async function main(){
    await mongoose.connect(DB);
}
// Return Promise
let a = main();
a.then(()=>{
    console.log("DB connected successfully!!");
});

// Connecting to port
const port = process.env.PORT || 8000;
app.listen(port , ()=>{
    console.log(`App running on the port ${port}`);
})
