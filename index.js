const express = require('express');
const path = require('node:path');
const router = require("./routes/router");

const hostname = 'localhost';
const port = 8080;
const assetsPath = path.join(__dirname, "public");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", router);
app.use("/new", router);


app.listen(port, (error) => {
    if (error){
        throw error;
    }
    console.log(`Server running at http://${hostname}:${port}/`)
})