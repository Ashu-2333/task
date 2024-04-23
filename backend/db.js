const mongoose = require('mongoose');


async function connectDB() {
  await mongoose.connect('mongodb://127.0.0.1:27017/task')
    .then(()=> console.log("Connected to Database"))
    .catch((err) => console.log("Database error :", err))
}

module.exports = connectDB