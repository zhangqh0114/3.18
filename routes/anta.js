const router = require("express").Router();
const mongoose = require("mongoose");
const Product = require("../models/anta-db.js");

mongoose
  .connect("mongodb://localhost/myDataBass", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch(err => {
    console.log(err);
  });

//列表页面
router.get("/", (req, res) => {
  Product.find().then(data => {
    res.render("anta/list", { products: data });
  });
});
//新增页面
router.get("/new", (req, res) => {
  res.render("anta/new", {});
});
//修改接口
router.get("/update",(req,res)=>{
    res.render("anta/update",{})
})
//新增的接口
router.post("/", (req, res) => {
  let product = new Product(req.body);
  product.save().then(() => {
    res.redirect("/anta");
  });
});
//修改接口

module.exports = router;
