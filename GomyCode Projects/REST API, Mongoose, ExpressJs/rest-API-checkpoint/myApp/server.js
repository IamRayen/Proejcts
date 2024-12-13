const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config({ path: "../config/.env" });
const routes = require("./Routes/api");
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, (err, res) => {
    err ? err : console.log("DB Connected SUC");
    app.listen(process.env.PORT, (err, res) => {
        err ? err : console.log("Express Connected");
    });
});

app.use(routes);
