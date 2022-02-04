// const express = require("express");
// const verify = require("../middleware/authenticator")
// const blogController = require("../controller/blogController")

import express from "express";
import verify from "../middleware/authenticator.js"
import BlogController from "../controller/blogController.js"
const router = express.Router();






router.post("/articles/create",verify, BlogController.createArticle)
/**
 * @swagger
 * components:
 *   schemas:
 *     post:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The book title
 *         author:
 *           type: string
 *           description: The book author
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 *
*/
router.get("/articles/:id", BlogController.getSingleArticle)
router.get("/articles", BlogController.getArticleListe)
router.delete("/articles/:id",verify, BlogController.deleteArticle)
router.patch("/articles/:id",verify, BlogController.updateArticle)
router.patch("/articles/comments/:id",verify,BlogController.comments)
router.patch("/articles/like/:id",verify,BlogController.likes)

module.exports = router;