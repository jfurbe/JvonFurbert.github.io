require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const url = `mongodb+srv://badbankadmin:${process.env.password}@cluster0.ibie1.mongodb.net/?retryWrites=true&w=majority`;
let db   = null;

console.log(`${process.env.password}`, 'lol')
// connect to mongo
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
    console.log(err);
    console.log("Connected successfully to db server");

    // connect to myproject database
    db = client.db('myproject');
});

// create user account using the collection.insertOne function
function create(name, email, password) {
  return new Promise((resolve, reject) => {
    const collection = db.collection('users');
    const doc = {name, email, password, balance:0};
    collection.insertOne(doc, {w:1}, function(err, result) {
      err ? reject(err) : resolve(doc);
    });
  })
}

// find user account 
function find(email) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({ email: email })
            .toArray(function (err, docs) {
                err ? reject(err) : resolve(docs);
            });
    })
}

// find user account
function findOne(email) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOne({ email: email })
            .then((doc) => resolve(doc))
            .catch((err) => reject(err));
    })
}

// update - deposit/withdraw amount
function update(email, amount) {

    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOneAndUpdate(
                { email: email },
                { $set: { balance: amount } },
                { returnOriginal: false },
                function (err, documents) {
                    err ? reject(err) : resolve(documents);
                }
            );


    });
}

// return all users by using the collection.find method
function all() {
    return new Promise((resolve, reject)=> {
      const customers = db
        .collection('users')
        .find({})
        .toArray(function(err, docs) {
            err ? reject(err) : resolve(docs);
        })
    })
}


module.exports = { create, findOne, find, update, all };