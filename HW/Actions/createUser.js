const db = require('../sql3-data');

module.exports = (req, res) => {
    let body = '';

    req.on('data', chunk => {
            body += chunk;
    });

    req.on('end', () => {
        const parsedBody = new URLSearchParams(body);
        const user = {};

        parsedBody.forEach((value, key) => {
            user[key] = value;
        })

        db.addUser(user).then(() =>{
            res.writeHead(201);
            res.end(JSON.stringify(user));
        });
    });
};