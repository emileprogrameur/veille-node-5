const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.static('public'));
app.set('view engine', 'ejs');

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