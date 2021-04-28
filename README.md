A simple telegram bot that sends out messages when your plants need water.

Create a .env file with the `BOT_TOKEN` and install node deps with `npm i`

To start the Bot in the background and write output to a file:
```
nohup node index.js > output.log &
```

And to kill it:
```
ps -fC node #copy the PID
kill -9 PID #replace PID with the actual PID
```