const auth = require("./auth");
const attention = require("./attention");
const device = require("./device");

const {Router} = require("express")
const router = Router()


//ROUTES
router.use(auth);

//LOCALHOST:3000/attention/
router.use("/attention", attention);

//LOCALHOST:3000/device/
router.use("/device", device);


//EXPORT
module.exports = router;