var express = require('express');
var router = express.Router();
var fs = require('fs');


router.post("/", function(req, res, next) 
{
  fs.readFile("user.json", function(err, data)
  {
    if(err) throw err;
    var users = JSON.parse(data);
    var userToCheck = users.find((u) => u.username === req.body.username);

    if (userToCheck.password === req.body.password)
    {
      res.send(userToCheck);
    }
    else
    {
      res.send("Wrong username or password");
    }
  })
});

module.exports = router;
