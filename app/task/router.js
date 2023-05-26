var express = require("express");
const {
  index,
  actionCreate,
  showDetail,
  actionEdit,
  actionDelete,
  actionDeleteAll,
} = require("./controller");
const isLogin = require("../middleware/auth");
var router = express.Router();

router.use(isLogin);
/* GET home page. */
router.get("/", isLogin, index);
router.post("/create", isLogin, actionCreate);
router.get("/detail/:id", isLogin, showDetail);
router.put("/edit/:id", isLogin, actionEdit);
router.delete("/delete/:id", isLogin, actionDelete);
router.delete("/delete/", isLogin, actionDeleteAll);

module.exports = router;
