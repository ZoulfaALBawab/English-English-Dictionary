var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
////////////////////////////////////////////


 app.use(express.static(__dirname + '/../react-client/dist'));

////////////////////////////////////////////

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

////////////////////////////////////////////

// need post function to enter the word and then get function to find its meaning
// ifollowed this link : https://www.npmjs.com/package/oxford-dictionary-api
// In Post :: i used the npm i oxford-dictionary-api and then defined the id and key in variables to use to the post function

//API Base URL	https://od-api.oxforddictionaries.com/api/v1

var Dictionary = require("oxford-dictionary-api");

var app_id = "66883450";

var app_key = "06682a4cb5dbc6670657f6a4545b7559";

var dict = new Dictionary(app_id,app_key);


app.post('/word', (req, res) =>{
	console.log('req ',req.body)
  dict.find(req.body.word,function(error,data){
     if(error)
     res.sendStatus(400)
     console.log(error,'not working');
     res.send(data)
     console.log(data,'here is the meaning');
   });

});

//////////////////

//!!!
//app.get ('/wordDef',(req, res) =>{
//  dict
//})


////////////////////////////////////////////

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname, '../react-client/dist/index.html')))
});

////////////////////////////////////////////

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
