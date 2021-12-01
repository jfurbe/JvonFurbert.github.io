const upload = require("../middleware/upload");
const dbConfig = require("../config/db");

const MongoClient = require("mongodb").MongoClient;
const GridFSBucket = require("mongodb").GridFSBucket;

const url = dbConfig.url;

const db = require("../models");
const Comment = db.cmts;

const baseUrl = "http://localhost:3000/files/";

const mongoClient = new MongoClient(url);

const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);
    await upload(req, res);
    
    
    if (req.file == undefined) {
      return res.send({
        message: "You must select a file.",
      });
    }

    return res.send({
      message: "File has been uploaded.",
    });
  } catch (error) {
    console.log(error);

    return res.send({
      message: `Error when trying upload image: ${error}`,
    });
  }
};

const getListFiles = async (req, res) => {
  try {
    await mongoClient.connect();

    const database = mongoClient.db(dbConfig.database);
    const images = database.collection(dbConfig.imgBucket + ".files");

    const cursor = images.find({});

    if ((await cursor.count()) === 0) {
      return res.status(500).send({
        message: "No files found!",
      });
    }
  
    let fileInfos = [];
    await cursor.forEach((doc) => {
      fileInfos.push({
        name: doc.filename,
        url: baseUrl + doc.filename,
      });
    });

    return res.status(200).send(fileInfos);
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

const download = async (req, res) => {
  try {
    await mongoClient.connect();

    const database = mongoClient.db(dbConfig.database);
    const bucket = new GridFSBucket(database, {
      bucketName: dbConfig.imgBucket,
    });

    let downloadStream = bucket.openDownloadStreamByName(req.params.name);
    console.log(req.params.name)
    downloadStream.on("data", function (data) {
      return res.status(200).write(data);
    });

    downloadStream.on("error", function (err) {
      return res.status(404).send({ message: "Cannot download the Image!" });
    });

    downloadStream.on("end", () => {
      return res.end();
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

const getComments = async (req, res) => {
  try {
    await mongoClient.connect();

    const database = mongoClient.db("Comments");
    const cmts = database.collection("cmts");

    const cursor = cmts.find({});


    if ((await cursor.count()) === 0) {
      return res.status(500).send({
        message: "No files found!",
      });
    }

    let fileInfos = [];
    await cursor.forEach((doc) => {
      fileInfos.push((doc));
    });

    return res.status(200).send(fileInfos);
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

const postComments = async (req,
  res) => {

   await mongoClient.connect();
   console.log(req.body)
   console.log(req.params)
   
   const database = mongoClient.db("Comments");
   const cmts = database.collection("cmts");

   
 
    console.log('asdasd')
  // Validate request
  if (!req.body.message) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  
  // Create a Comment
  const comment = new Comment({
    id: req.body.id,
    userName: req.body.userName,
    timeStamp: req.body.timeStamp,
    message: req.body.message,
    votes: req.body.votes,
    comments: req.body.comments,
  });

  console.log(comment)
  const cursor = cmts.insertOne(comment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Comment."
      });
    });
}

const updatePost = async (req,
  res) => {

   await mongoClient.connect();
   console.log(req.body)
   console.log(req.params)
   
   const database = mongoClient.db("Comments");
   const cmts = database.collection("cmts");

   oldComment = ( await cmts.findOne({ "id" : req.params.comment }))
 

  // Validate request
  if (!req.body.message) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  //console.log(comment)
  // Create a Comment
  const comment = new Comment({
    id: req.body.id,
    userName: req.body.userName,
    timeStamp: req.body.timeStamp,
    message: req.body.message,
    votes: req.body.votes,
    comments: req.body.comments,
  });

  const cursor = cmts.updateOne(
    { "id" : req.params.comment }, // specifies the document to update
    {
      $set: { "comments" : [...oldComment.comments, comment] },
    }
)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Comment."
    });
  });
}

module.exports = {
  uploadFiles,
  getListFiles,
  download,
  getComments,
  postComments,
  updatePost,
};