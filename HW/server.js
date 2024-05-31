const http = require('http');

const PORT = 3000;

const routeHandler = require('./router');

const server = http.createServer(routeHandler).listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});