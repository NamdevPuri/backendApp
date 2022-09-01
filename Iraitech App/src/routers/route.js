const express = require("express");
const router = express.Router()
const userController = require("../controllers/userController")
const userProfileController = require("../controllers/profileController")
const mid = require("../middleware/authentication")

router.post("/login", userController.login)

router.post("/signup", userController.signup)

router.post("/userProfile", userProfileController.userProfile)

router.get("/getList", userProfileController.getList)

router.put("/editProfile/:userId", mid.auth, userProfileController.editProfile)

module.exports = router