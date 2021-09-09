const { Router } = require("express");
const passport = require("passport");
const { isLoggedIn } = require("../middlewares/helpers");
const router = Router();

//ESTA ES LA PAGINA ES LA PÁGINA PRINCIPAL QUE SE MUESTRA CUANDO EL USUARIO ESTA LOGUEADO
router.get("/", isLoggedIn, (req, res) => {
  res.json({ message: "Welcome", user: req.user });
});

//ESTA ES LA PESTAÑA DE LOGIN
router.get("/login", (req, res) => {
  res.send("Login Page");
});

//ESTA ROUTA RECIBE LOS DATOS DEL FORMULARIO Y LOS COMPARA CON LOS DE LA BASE DE DATOS
router.post("/login", async (req, res, next) => {
  passport.authenticate("login", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: false,
  })(req, res, next);
});

router.get("/signup", (req, res) => {
  res.send("Signup Page");
});

router.post(
  "/signup",
  passport.authenticate("signup", {
    successRedirect: "/",
    failureRedirect: "/signup",
    failureFlash: false,
  })
);

module.exports = router;
