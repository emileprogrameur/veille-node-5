const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

let db // variable qui contiendra le lien sur la BD

MongoClient.connect('mongodb://127.0.0.1:27017/carnet_adresse', (err, database) => {
 if (err) return console.log(err)
 db = database
// lancement du serveur Express sur le port 8081
 app.listen(8081, () => {
 console.log('connexion à la BD et on écoute sur le port 8081')
 })
})

app.get('/', function (req, res) {
    let cursor = db.collection('adresse')
                .find().toArray(function(err, resultat){
 			if (err) return console.log(err)
 		// transfert du contenu vers la vue index.ejs (renders)
 		// affiche le contenu de la BD          
  		res.render('gabarit.ejs', {adresses: resultat})  
  	});
})

const server = app.listen(8080, function () {
   const host = server.address().address
   const port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})