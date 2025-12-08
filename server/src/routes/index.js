const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const personController = require("../controllers/personController");
const sourceController = require("../controllers/sourceController");
const filesController = require("../controllers/filesController");
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/authMiddleware");
const sharperMidlleware = require("../middlewares/sharperMIddleware");
const { memoryStorage } = require("multer");
const multer = require("multer");

const storage = memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

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

router.get("/users", authMiddleware, userController.getUsersList);
router.get("/user/:id", authMiddleware, userController.getUser);

router.get("/persons", authMiddleware, personController.getPersonsList);
router.get("/person/:id", authMiddleware, personController.getPerson);
router.post("/createPerson", authMiddleware, personController.createPerson);
router.post("/updatePerson", authMiddleware, personController.updatePerson);
router.post("/deletePerson/:id", authMiddleware, personController.deletePerson);

router.get("/sources", authMiddleware, sourceController.getSourcesList);
router.get("/source/:id", authMiddleware, sourceController.getSource);
router.post("/createSource", authMiddleware, sourceController.createSource);
router.post("/updateSource", authMiddleware, sourceController.updateSource);
router.post("/deleteSource/:id", authMiddleware, sourceController.deleteSource);

router.post(
  "/upload",
  authMiddleware,
  upload.single("file"),
  sharperMidlleware,
);
router.post("/download", authMiddleware, filesController.download);

module.exports = router;
