var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next)
{
    fs.readFile('user.json', function(err, data)
    {
        if(err) throw err;
        var usersToCheck = JSON.parse(data);
        var emailsWhoSub = [];
        for(i=0; i < usersToCheck.length; i++)
        {
            if (usersToCheck[i].subscribed === true)
            {
                emailsWhoSub.push(usersToCheck[i].email);
            }
        }
        res.send(emailsWhoSub);
    });
})

module.exports = router;