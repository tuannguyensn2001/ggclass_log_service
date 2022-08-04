const express = require("express");
const {create} = require("../services/logs_assigment/http_transport");

const router = express.Router();

router.post("/v1/log_assignments",create);

module.exports = router;
