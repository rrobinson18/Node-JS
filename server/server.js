const path = require('path');
const fs = require('fs');
const request = require('request');


let chirpPath = path.join(__dirname, '../chirp.json');

request('chirps.json', (err, res, body) => {

    if(err) console.log(err);

    JSON.parse(body).chirps.forEach(item => {
       fs.appendFileSync(chirpPath,item.chirps + '\n');
    });

});