const express = require("express");
const router = express.Router();
const passport = require("passport");


const Profile = require("../../models/Profile");


// 测试
// @route GET api/profiles/test
router.get('/test',(req,res) => {
  res.json({msg:'Profile works'});
});


module.exports = router;