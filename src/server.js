var express = require('express');
var app = express();

app.use(express.static('../public'))

app.get('/', function (request, response) {
      response.send('your very first server. good work!');
    });

 app.listen(3000, function(){
        console.log('server is running on port 3000')
    });