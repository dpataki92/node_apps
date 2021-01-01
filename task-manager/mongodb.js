// CRUD operations

const {MongoClient, ObjectID} = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error) {return console.log("Unable to connnect to database!")}

    const db = client.db(databaseName);

/*     db.collection("users").findOne({_id: new ObjectID("5fef67bd0335640d1fa2b369")}, (error, user) => {
        if (error) return console.log("Unable to fetch user.");

        console.log(user);
    }); */

/*     db.collection("users").find({age: 27}).toArray((error, users) => {
        console.log(users);
    });  

    db.collection("users").find({age: 27}).count((error, count) => {
        console.log(count);
    });  */


    db.collection("tasks").findOne({_id: ObjectID("5fef667643b60b0cf560524c")}, (error, user) => {
        if (error) return console.log("Unable to fetch user");

        console.log(user);
    })

    db.collection("tasks").find({completed: false}).toArray((error, users) => {
        if (error) return console.log("Unable to fetch user");

        console.log(users);
    })

});