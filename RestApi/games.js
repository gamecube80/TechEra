var express = require('express');
var router = express.Router();

var games = [
    { id: 101, name: "Dark Souls", genre: "Rpg" },
    { id: 102, name: "Call of Duty", genre: "Shooter" },
    { id: 103, name: "Mario", genre: "Platformer" },
    { id: 104, name: "Diablo", genre: "Arpg" },
    { id: 105, name: "Tametsi", genre: "Puzzle" },
    { id: 106, name: "Hunie Pop", genre: "Dating Sim" }
];

router.get('/', function (req, res) {
    res.json(games);
});

router.get('/:id([0-9]{3,})', function (req, res) {
    var cGame = games.filter(function (game) {
        if (game.id == req.params.id) {
            return true;
        }
    });
    if (cGame.length == 1) {
        res.json(cGame[0])
    }
    else {
        res.stsus(404);
        res.json({ message: "not found" });
    }
});

router.post('/', function (req, res) {
    if (!req.body.name || !req.body.genre) {
        req.statusCode(400);
        req.json({ message: "bad request" });
    }
    else {
        var newId = games[games.length - 1].id + 1;
        games.push({
            id: newId,
            name: req.body.name,
            genre: req.body.genre
        });
        res.json({ message: "Object is created" });
    }
});

router.delete('/:id', function(req, res){
    var removeIndex = games.map(function(game){
       return game.id;
    }).indexOf(req.params.id); //Gets us the index of game with given id.
    
    if(removeIndex === -1){
       res.json({message: "Not found"});
    } else {
       games.splice(removeIndex, 1);
       res.send({message: "Game id " + req.params.id + " removed."});
    }
 });

module.exports = router;