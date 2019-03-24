const path = require('path');
const fs = require('fs');
const request = require('request-promise');

let downloadPath = path.join(__dirname, './downloads/');

let downloadArticle = [];

request('https://reddit.com/r/popular.json', (err, res, body) => {

    if (err) console.log(err);
    

    JSON.parse(body).data.children.forEach(item => {
        if (path.extname(item.data.url)) {
            request.get(item.data.url, { encoding: 'binary' }, (err, res) => {
                if (err) console.log(err);
                fs.appendFileSync(downloadPath + path.basename(item.data.url), res.body, {encoding: 'binary'})
            })
        }
    });
})