const router = require("express").Router();
const payDayRouter = require("../controllers/payDayRouter");

router.route("/").get(payDayRouter.getSpending).post(payDayRouter.addSpending);

module.exports = router;