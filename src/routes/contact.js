// const express = require("express");
// const contactController = require("../controller/contact")
// const verify = require("../middleware/authenticator")


import express from "express";
import ContactController from "../controller/contact.js";
import verify from "../middleware/authenticator.js";
const router = express.Router();

router.post("/contact", ContactController.sendMessage)
router.get("/contact",verify, ContactController.GetAllMessage)
router.get("/contact/:id",verify,ContactController.GetsingleMessage)
router.delete("/contact/:id",verify,ContactController.DeleteMessage)

module.exports = router;