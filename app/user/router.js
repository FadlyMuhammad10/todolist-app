var express = require("express");
var router = express.Router();
const { actionCreate, actionLogin } = require("./controller");
/* GET home page. */

router.post("/create", actionCreate);
router.post("/login", actionLogin);

module.exports = router;
