var express = require('express');
var app = express();
var bodyParser = require("body-parser");

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));
app.get("/index.htm", function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});


app.post("/token", urlencodedParser, function(req, res) {
  var request = require("request");

  var options = {
    method: "POST",
    url: "http://localhost/api/authorize/access_token",
    headers: {
      "cache-control": "no-cache",
      Connection: "keep-alive",
      "content-type":
        "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
      "accept-encoding": "gzip, deflate",
      cookie: "PHPSESSID=3pgnmkeee0h4oukerueg8voi91",
      Host: "localhost",
      //'Postman-Token': '6ebd46fb-5d3d-40f4-8135-5fc952720cca,de52082b-875b-4f21-b57f-b8cc5be4ad7f',
      "Cache-Control": "no-cache",
      Accept: "*/*"
    },
    formData: {
      client_id: "HlaChTftiO8wh8GI1jDfgcy7TBrsq0OupKIl0XyA",
      client_secret:
        "B2JGYVKpWUiBlduAU6R6W2GCCBDI4VKNKgMVkDBpxoshAAi3VidcA1CyUc8Aeyc0gQXNBLD1qYrqWaH2BWKUN8Dlb6JdDa41JHp5xrq91F8MR27UbwiWZYnmYtWhjRXgknp7m6A4j9aTr47W1oiYzgpkcoWSCqLI2JWTEELcYiqmXxkgH0xFsjfPTAoHUrrluyZ1olIAUkri1Mc0pKQKu0vSoqgzNiI9CCBnivJT7asadVCSN7jjEiH1oX9i19",
      grant_type: 'client_credentials'
    }
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
});


app.get('/display', function (req, res) {
   res.send('hi');
});

app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
});


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});
