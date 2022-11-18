var http = require('http');

http.createServer(
    function (req, res) {
        res.write("Hello TechEra");
        res.end();
    }
).listen(8082);