var http = require('http').createServer(handler); //require http server, and create server with function handler()
var fs = require('fs'); //require filesystem module
var io = require('socket.io')(http) //require socket.io module and pass the http object (server)

var gpio = require('rpi-gpio');
gpio.setMode(gpio.MODE_BCM);


function gpioWrite(gpioNumber, onoff){

    gpio.setup(gpioNumber, gpio.DIR_OUT, write);

    function write(err) {
        gpio.write(gpioNumber, onoff, function(err){
            if (err){
                console.log(err);
            }
        });
        return 0;
    }
    return 0;
}

http.listen(80); //listen to port 8080

function handler(req, res) { //create server
    fs.readFile(__dirname + '/public/index.html', function (err, data) { //read file index.html in public folder
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' }); //display 404 on error
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' }); //write HTML
        res.write(data); //write data from index.html
        return res.end();
    });
}

io.sockets.on('connection', function (socket) {// WebSocket Connection
    var dataReceived = 0; //static variable for current status
    socket.on('onoff', function (dataReceived) { //get light switch status from client
        onoff = dataReceived[0];
        gpioNumber = dataReceived[1];
        gpioWrite(gpioNumber, onoff);        
        //console.log(onoff, gpioNumber);
    });
});