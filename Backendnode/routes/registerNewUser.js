var express = require('express');
var router = express.Router();
var fs = require('fs');

router.post("/", function(req, res, next) 
{
    var newUser = req.body;
    console.log(newUser);
    var users = [];
    fs.readFile('./user.json', function(err, data) 
    {
        if(err) throw err;
        users = JSON.parse(data);
        
        console.log(users);
        users.forEach(u => 
        {
            newUser.id += 1;
        });
        users.push(newUser);
        var updatedUsers = JSON.stringify(users, null, 2);
        fs.writeFile('./user.json', updatedUsers, function(err) 
        {
            if(err) throw err;
        });
    });
    res.send(newUser);
});
module.exports = router;