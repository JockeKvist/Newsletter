var express = require('express');
var router = express.Router();
var fs = require('fs');

router.put('/:id', function(req, res, next)
{
    var userId = req.body.id;
    fs.readFile('user.json', function(err, data)
    {
        if(err) throw err;
        var userToChangeSub = JSON.parse(data);
        var userChange = userToChangeSub.find(u => u.id == userId);
        userChange.subscribed = req.body.subscribed;
        var updatedUsers = JSON.stringify(userToChangeSub, null, 2);
        fs.writeFile('./user.json', updatedUsers, function(err)
        {
            if(err) throw err;
        });
    });
    res.send("Changed subscription");
})

module.exports = router;