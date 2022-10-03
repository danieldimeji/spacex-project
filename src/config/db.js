require('dotenv').config();
const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB")
});

mongoose.connection.on('error', (err) => {
    console.error(err)
})

async function mongoConnect(){
    await mongoose.connect(MONGO_URL)
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}
 
module.exports = {
    mongoConnect,
    mongoDisconnect,
}


//MONGO_URL=mongodb+srv://nasa-api:5LRvYkWaac8YxQ2p@nasacluster.pqwjnyu.mongodb.net/nasa?retryWrites=true&w=majority