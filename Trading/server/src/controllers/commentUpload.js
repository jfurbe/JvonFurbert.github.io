const db = require("../models");
const Tutorial = db.tutorials;

const dbConfig = require("../config/db");

const MongoClient = require("mongodb").MongoClient;
const url = dbConfig.url;

const baseUrl = "http://localhost:3000/files/";

const mongoClient = new MongoClient(url);


const postComments = exports.create = (req, res) => {
  
};
};



module.exports = {
   postComments,
 };