var express = require('express');
var router = express.Router();

const Articles = require("../../../model/articles")

router.get('/', function(req, res, next) {
  const { blogIdx } = req.params;
  
  Articles.readAll(blogIdx)
  .then(({code,json})=> res.status(code).send(json))
  .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR,
      authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR))
  })

});

router.get('/:articleIdx', (req, res) => { 
  const { blogIdx } = req.params;

  const articleIdx = req.params.articleIdx;
  if(!articleIdx){
      res.status(statusCode.BAD_REQUEST)
      .send(authUtil.successFalse(responseMessage.NULL_VALUE))
  }
});

router.post('/', function(req, res, next) {

  const { blogIdx } = req.params;
  console.log(blogIdx)

  const {
    title, 
    contents
  } = req.body;


  // //파라미터 오류 
  // if(!title || !contents){
  //     res.status(statusCode.BAD_REQUEST)
  //     .send(authUtil.successFalse(responseMessage.NULL_VALUE));
  //     return;
  // }

  console.log(blogIdx)
  console.log(title)
  console.log(contents)

  Articles.create(parseInt(blogIdx), title, contents)
  .then(({code,json})=> res.status(code).send(json))
  .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR,
      authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR))
  })

});

router.put('/', function(req, res, next) {
  const blogIdx = req.params.blogIdx;

  const {
    idx,
    title, 
    contents
  } = req.body;

  Articles.update(blogIdx, parseInt(idx), title, contents)
  .then(({code,json})=> res.status(code).send(json))
  .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR,
      authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR))
  })
});

router.delete('/', function(req, res, next) {
  const { blogIdx } = req.params;

  const {
    idx
  } = req.body;

  Articles.remove(parseInt(idx))
  .then(({code,json})=> res.status(code).send(json))
  .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR,
      authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR))
  })

});

module.exports = router;
