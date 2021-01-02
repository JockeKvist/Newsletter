var express = require('express');
var router = express.Router();
var fs = require('fs');


router.post("/", function(req, res, next) 
{
  var userLogin = req.body.username;
  fs.readFile("user.json", function(err, data)
  {
    if(err) throw err;
    var users = JSON.parse(data);
    console.log(data);
    //var testbest = {username = "test", password = "test"};
    console.log(userLogin);
    var userToCheck = users.find(u => u.username === userLogin);
    console.log(userToCheck);
    
    

    if (userToCheck.password === req.body.password)
    {
      console.log(userToCheck);
      res.send(JSON.stringify(userToCheck));
    }
    else
    {
      res.send(JSON.stringify("Wrong username or password"));
    }
  })
});

module.exports = router;
