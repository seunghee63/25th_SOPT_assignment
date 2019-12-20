var express = require('express');
var router = express.Router();

const Blogs = require("../../model/blogs")

router.get('/', function(req, res, next) {

  Blogs.readAll()
  .then(({code,json})=> res.status(code).send(json))
  .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR,
      authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR))
  })

});

router.get('/:blogIdx', (req, res) => { 
  const { blogIdx } = req.params;

  if(!blogIdx){
      res.status(statusCode.BAD_REQUEST)
      .send(authUtil.successFalse(responseMessage.NULL_VALUE))
  }
});

router.post('/', function(req, res, next) {

  const {
    user, 
    address
  } = req.body;

  //파라미터 오류 
  if(!user || !address){
      res.status(statusCode.BAD_REQUEST)
      .send(authUtil.successFalse(responseMessage.NULL_VALUE));
      return;
  }

  Blogs.create(user, address)
  .then(({code,json})=> res.status(code).send(json))
  .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR,
      authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR))
  })

});

router.put('/', function(req, res, next) {

  const {
    idx,
    user, 
    address
  } = req.body;

  //파라미터 오류 
  // if(!idx){
  //     res.status(statusCode.BAD_REQUEST)
  //     .send(authUtil.successFalse(responseMessage.NULL_VALUE));
  //     return;
  // }

  Blogs.update(parseInt(idx), user, address)
  .then(({code,json})=> res.status(code).send(json))
  .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR,
      authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR))
  })
});

router.delete('/', function(req, res, next) {

  const {
    idx
  } = req.body;

  Blogs.remove(parseInt(idx))
  .then(({code,json})=> res.status(code).send(json))
  .catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR,
      authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR))
  })

});

module.exports = router;
