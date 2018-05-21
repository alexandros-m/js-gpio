# js-gpio
A node.js program that, if ran on raspberry pi, creates an interface that can control the GPIO Pins from the browser, from any other computer, inside or outside the local network.

### To setup the server:
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
npm i rpi-gpio
npm i socket.io
```

Then run it by:
```
node webserver.js
```

Feel free to take a look at my code, I am not that expierenced at node.
Looking forward to get feedback.
