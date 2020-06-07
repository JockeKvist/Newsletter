var express = require('express');
var router = express.Router();

router.post("/", function(req, res)
{
    var loginUsername = req.body.adminUser;
    var loginPassword = req.body.adminPassword;
   
    if (loginPassword === "admin" && loginUsername === "admin")
    {
        res.redirect("/subscribed");
    }
    else
    {
        res.redirect("/");
    }
});

module.exports = router;