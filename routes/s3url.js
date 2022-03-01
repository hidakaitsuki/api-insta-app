var express = require("express");
var router = express.Router();
var { generateUploadURL } = require("./s3");
var { deleteFiles } = require("./s3");

// 画像URL生成
router.get("/", async (req, res) => {
  const url = await generateUploadURL();
  res.send({ url });
});

// 画像をバケットから削除
router.delete("/",(req, res) => {
  deleteFiles(req.body.urlArray);  
});

module.exports = router;
