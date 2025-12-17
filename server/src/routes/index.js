const express = require("express");
const router = express.Router();
const {
  UserController,
  PersonController,
  SourceController,
  FilesController,
  MarkerController,
  PickedMarkersController,
} = require("../controllers");
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/authMiddleware");
const sharperMiddleware = require("../middlewares/sharperMiddleware");

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
  UserController.registration,
);
router.get("/activate/:link", UserController.activate);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.get("/refresh", UserController.refresh);

router.get("/users", authMiddleware, UserController.getUsersList);
router.get("/user/:id", authMiddleware, UserController.getUser);

router.get("/persons", authMiddleware, PersonController.getPersonsList);
router.get("/person/:id", authMiddleware, PersonController.getPerson);
router.post("/createPerson", authMiddleware, PersonController.createPerson);
router.post("/updatePerson", authMiddleware, PersonController.updatePerson);
router.post("/deletePerson/:id", authMiddleware, PersonController.deletePerson);

router.get("/sources", authMiddleware, SourceController.getSourcesList);
router.get("/source/:id", authMiddleware, SourceController.getSource);
router.post("/createSource", authMiddleware, SourceController.createSource);
router.post("/updateSource", authMiddleware, SourceController.updateSource);
router.post("/deleteSource/:id", authMiddleware, SourceController.deleteSource);

router.get(
  "/markers/:sourceId",
  authMiddleware,
  MarkerController.getMarkerList,
);
router.post("/createMarker", authMiddleware, MarkerController.createMarker);
router.post("/updateMarker", authMiddleware, MarkerController.updateMarker);
router.post("/deleteMarker/:id", authMiddleware, MarkerController.deleteMarker);

router.post(
  "/getPickedMarkers",
  authMiddleware,
  PickedMarkersController.getPickedMarkers,
);
router.post(
  "/updatePickedMarkers",
  authMiddleware,
  PickedMarkersController.updatePickedMarkers,
);

router.post(
  "/upload",
  authMiddleware,
  upload.single("file"),
  sharperMiddleware,
);
router.post("/download", authMiddleware, FilesController.download);

module.exports = router;
