const express = require("express")
const router = express.Router()
const {formData} = require("../controllers/formController")

router.post("/contactUs",formData)

module.exports = {router};