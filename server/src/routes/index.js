const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const personController = require("../controllers/personController");
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/authMiddleware");

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 6, max: 32 }),
  userController.registration,
);
router.get("/activate/:link", userController.activate);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/refresh", userController.refresh);

router.get("/users", authMiddleware, userController.getUsers);

router.get("/persons", personController.getPersonsList);
router.get("/person/:id", personController.getPerson);
router.post("/createPerson", personController.createPerson);
router.post("/updatePerson", personController.updatePerson);
router.post("/deletePerson/:id", personController.deletePerson);

module.exports = router;
