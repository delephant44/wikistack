const router = require("express").Router();
router.get("/", (req, res) => {
    console.log("I am here in /wiki");
})
module.exports = router;