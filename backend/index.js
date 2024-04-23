const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db");

connectDB();
app.use(cors());
app.use(express.json());

// app.use("/", require("./route/data"))

app.use("/users", require("./route/user"));

app.listen(8080, ()=> {
    console.log(`Server is running on port 8080`);
})