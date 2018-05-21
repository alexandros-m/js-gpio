# js-gpio
A node.js program that, if ran on Raspberry Pi, creates an interface that can control the GPIO Pins from the browser, from any other computer, inside or outside of the local network.

### Setup the server:
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
npm i rpi-gpio
npm i socket.io
```

### Run the server:
```
node webserver.js
```

### Access the server:

Find the Raspberry Pi IP from your router, or (even better) use a static IP for your Raspberry Pi.
Access the server by opening a browser and using the internal IP as a link.
* Make sure you are not using another webserver on port 80 of your Raspberry Pi

Feel free to take a look at my code, I am not that expierenced at node.
Looking forward to get feedback.
