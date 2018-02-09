const express = require('express');
const app = express();
const fs = require('fs');
const mongoClient = require ('mongodb').MongoClient;
cont bodyParser = require ('body-parser');
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var db // variable qui contiendra le lien sur la BD

MongoClient.connect('mongodb://127.0.0.1:27017/ma_bd', (err, database) => {
 if (err) return console.log(err)
 db = database
// lancement du serveur Express sur le port 8081
 app.listen(8081, () => {
 console.log('connexion à la BD et on écoute sur le port 8081')
 })
})

app.get('/', function (req, res) {
   fs.readFile( __dirname + "/public/data/" + "membres.txt", 
        'utf8',
        (err, data) => {if (err) { return console.error(err);}
        	console.log( data );
        	let resultat = JSON.parse('[' + data + ']');           
  		res.render('gabarit.ejs', {adresses: resultat})  
  	});
})

const server = app.listen(8080, function () {
   const host = server.address().address
   const port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})