const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");
const bodyParser = require('body-parser');


let routes = app => {
 // router.get("/", homeController.getHome);
 app.use(bodyParser.json()),

  router.post("/upload", uploadController.uploadFiles);
  router.get("/files", uploadController.getListFiles);
  router.get("/files/:name", uploadController.download);
  router.get("/comments", uploadController.getComments);
  router.post("/comments", uploadController.postComments);
  router.post("/comments/:comment", uploadController.updatePost);

  return app.use("/", router);
};

module.exports = routes;