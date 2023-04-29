const router = require("express").Router();
const monthlySpendingController = require("../controllers/monthlySpendingController");

router.route("/").get(monthlySpendingController.getSpending).post(monthlySpendingController.addSpending);

module.exports = router;