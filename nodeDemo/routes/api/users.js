const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const keys = require("../../config/keys");
const passport = require("passport");
const User = require("../../models/User");

router.get('/test',(req,res) => {
  res.json({msg:'login works'});
});

router.post("/register",(req,res) => {
  // console.log(req.body)
  User.findOne({email:req.body.email})
    .then((user) => {
      if (user) {
        return res.status(400).json("邮箱已被注册");
      }else{
        const avatar = gravatar.url(req.body.email, {s: '200', r: 'pg', d: 'mm'});
        const newUser = new User({
          name:req.body.name,
          email:req.body.email,
          avatar,
          password:req.body.password,
          identity:req.body.identity,
        });
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(newUser.password, salt, function(err, hash) {
              // Store hash in your password DB.
              if(err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
          });
      });
      }
    });
});

router.post('/login',(req,res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({email})
  .then(user => {
    if(!user){
      return res.status(404).json("用户不存在");
    }
    bcrypt.compare(password, user.password)
          .then(isMatch => {
            if(isMatch){
              const rule = {
                id:user.id,
                name:user.name,
                avatar:user.avatar,
                identity:user.identity
              };
              // jwt.sign('规则','加密名字','过期时间','箭头函数');
              jwt.sign(rule,keys.secretOrKey,{expiresIn:3600},(err,token) => {
                if(err) throw err;
                res.json({
                  success:true,
                  token: "Bearer " + token
                });
              });
              // res.json({msg:"success"});
            }else{
              return res.status(400).json("密码错误");
            }
          });
  });
});

router.get('/current',passport.authenticate("jwt",{session:false}),(req,res) => {
  res.json({
    id:req.user.id,
    name:req.user.name,
    email:req.user.email,
    identity:req.user.identity
  });
});


// 获取
// @route GET api/users
router.get('/',passport.authenticate("jwt",{session:false}),(req, res) => {
  User.find()
    .then(user => {
      if(!user){
        return res.status(404).json("没有任何数据");
      }
      res.json(user);
    })
    .catch(err => res.status(404).json(err));
});
// 删除
// @route DELETE api/users/delete/id
router.delete('/delete/:id',passport.authenticate("jwt",{session:false}),(req, res) => {
  User.findOneAndRemove({_id:req.params.id}).then(user => {
    user.save().then(user => res.json(user));
  })
    .catch(err => res.status(404).json("删除失败"));
});



module.exports = router;
