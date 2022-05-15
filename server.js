require('dotenv/config');
const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL_LOCAL)
.then(() => console.log("Connected to MongoDB!"))
.catch(err => console.log("MongoDB Connection Failed!")) ;
const port = process.env.PORT || 3001;

app.listen(port, ()=> {
    console.log(`app running on port ${port} !`);
})