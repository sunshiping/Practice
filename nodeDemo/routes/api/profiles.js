const express = require("express");
const router = express.Router();
const passport = require("passport");


const Profile = require("../../models/Profile");


// 测试
// @route GET api/profiles/test
router.get('/test',(req,res) => {
  res.json({msg:'Profile works'});
});

// 添加
// @route POST api/profiles/add
router.post('/add',passport.authenticate("jwt",{session:false}),(req, res) => {
  const profileFileds = {};

  if(req.body.type)profileFileds.type = req.body.type;
  if(req.body.describe)profileFileds.describe = req.body.describe;
  if(req.body.income)profileFileds.income = req.body.income;
  if(req.body.expend)profileFileds.expend = req.body.expend;
  if(req.body.cash)profileFileds.cash = req.body.cash;
  if(req.body.remark)profileFileds.remark = req.body.remark;

  new Profile(profileFileds).save().then(profile => {
    res.json(profile);
  });
});


// 获取
// @route POST api/profiles
router.get('/',passport.authenticate("jwt",{session:false}),(req, res) => {
  Profile.find()
  .then(profile => {
    if(!profile){
      return res.status(404).json("没有任何数据");
    }
    res.json(profile);
  })
  .catch(err => res.status(404).json(err));
});


module.exports = router;