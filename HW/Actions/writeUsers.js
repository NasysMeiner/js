const db = require('../sql3-data');

module.exports = async (req, res) =>{
    res.writeHead(200);
    res.end(JSON.stringify(await db.getUsers()));
};