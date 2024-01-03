const { Router } = require("express");
const {
  createTransaction,
  getAllTransaction,
  getTotalIncomeExpense,
  getChartData,
} = require("../controller/transactionController");

const router = Router();

router.route("/chartdata/:userId").get(getChartData);
router.route("/total").get(getTotalIncomeExpense);
router.route("/:userId").get(getAllTransaction);
router.route("/").post(createTransaction);

module.exports = router;
