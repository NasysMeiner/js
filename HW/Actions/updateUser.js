const data = require('../dataUsers');
const db = require('../sql3-data');

module.exports = (req,res) => {
    let body = '';

    req.on('data', (chunk) => {
        body += chunk;
    });

    req.on('end', async () => {
        const parsedBody = new URLSearchParams(body);
        const id = parsedBody.get('id');

        let user = {};

        parsedBody.forEach((value, key) => {
            user[key] = value;
        })

        user = await db.updateUser(id, user);

        if(user){
            res.writeHead(200);
            res.end(JSON.stringify(user));
        } else{
            res.writeHead(400);
            res.end(JSON.stringify(`user not founded`));
        }
    });
};