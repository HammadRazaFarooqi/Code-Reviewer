const express= require("express");
const aiController=require("../controller/ai.controller")

const router = express.Router();

router.post("/getReview",aiController.getReview )

module.exports = router;