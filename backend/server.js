const express = require("express");
const mongoose = require("mongoose");
let cors = require('cors');
let bodyParser = require('body-parser');
const app = express();

const Habit = require('./models/Habit.model');
const Task = require('./models/Task.model');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/habit_tracker')
  .then(() => {
        console.log('Database connected sucessfully!')
    },
        error => {
            console.log('Database could not be connected : ' + error)
        }
    )
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

var habit_routes = require("./routes/habit_routes");
app.use("", habit_routes);

var task_routes = require("./routes/task_routes");
app.use("", task_routes);

app.get("/", function (req, res) {
    res.send();
});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 5000;
}

app.listen(port, function () {
    console.log("Server successfully started on 10.0.0.200:" + port);
});

// Error Handling
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});