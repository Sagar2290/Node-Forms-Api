const express = require("express");

const router = express.Router();

const formController = require("../controller/form");

router.get("/", formController.getAllUser);

router.get("/static", formController.staticData);

router.post("/user", formController.postNewUser);

router.get("/search/:id", formController.getUserById);

router.post("/update", formController.postUpdateUser);

router.delete("/delete/:id", formController.deleteUserById);

module.exports = router;
