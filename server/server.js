const path = require('path');
const fs = require('fs');
// const request = require('request');


let chirpPath = path.join(__dirname, '../chirps.json');


fs.readFile(chirpPath, (err, data) => {
    if(err) console.log(err);

    console.log(data.toString());
});

// request('chirps.json', (err, res, body) => {

//     if(err) console.log(err);

//     JSON.parse(body).chirps.forEach(item => {
//        fs.appendFileSync(chirpPath,item.chirps + '\n');
//     });

// });