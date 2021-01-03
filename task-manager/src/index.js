const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

/* app.use((req, res, next) => {
    if (req.method === "GET") {
        res.send("GET requests are disabled")
    }
    else {
        next()
    }
}) */

app.use((req, res, next) => {
    res.status(503).send("Server is currently disabled")
})

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
});

const jwt = require("jsonwebtoken");

const myFunc = async() => {
    const token = jwt.sign({_id: "abc123"}, 'thisisaseriesofcharacters', {expiresIn: "5 second"});
    console.log(token);

    const data = jwt.verify(token, 'thisisaseriesofcharacters')
    console.log(data)
}

myFunc();