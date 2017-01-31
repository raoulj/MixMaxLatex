var express = require('express');
var app = express();
var mathmode = require('mathmode');

// we need to enable CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'https://compose.mixmax.com');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header('Access-Control-Allow-Credentials', 'true');

    next();
});

app.get('/', function(req, res, next) {
    return self.mathmode("e^{i \\pi} = -1").pipe(process.stdout)
});

app.listen(process.env.PORT || 3000)