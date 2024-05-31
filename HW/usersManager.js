const url = require('url');

const writeUsers = require('./Actions/writeUsers');
const createUser = require('./Actions/createUser');
const deleteUser = require('./Actions/deleteUser');
const searchUser = require('./Actions/searchUser');
const updateUser = require('./Actions/updateUser');

const manager = (req, res) => {
    const metod = req.method;
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;

    res.setHeader('Content-Type', 'application/json');

    if(path === '/users' && metod === 'GET'){
        writeUsers(req,res);
    }
    else if(path === '/users' && metod === 'POST'){
        createUser(req,res);
    }
    else if(path.startsWith('/users/') && metod === 'DELETE'){
        deleteUser(req,res);
    }
    else if(path.startsWith('/users/') && metod === 'PUT'){
        updateUser(req,res);
    } 
    else if(path.startsWith('/users/') && metod === 'GET'){
        searchUser(req,res);
    }
    else{
        res.writeHead(404);
        res.end(JSON.stringify({message: 'not found url or metod'}));
    }
};

module.exports = manager;