const express = require("express");
const router = express.Router();
const {
  signUp,
  signIn,
  verify,
  verified,
  revalidarToken,
} = require("../controllers/authController");
const {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
} = require("../middlewares/validationSignup");
const { verifyToken } = require("../middlewares/auth-jwt");

router.post("/signin", signIn);

router.post(
  "/signup",
  [checkRolesExisted, checkDuplicateUsernameOrEmail],
  signUp
);

router.get("/verify/:uid", verify);
router.get("/verified", verified);
router.get("/renew", verifyToken, revalidarToken);

module.exports = router;
