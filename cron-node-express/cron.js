// require dependencies
const express = require("express");
const cron = require("node-cron");
const log = console.log;
// initialize express and port number
const app = express();
const port = 3000;
// setup cron job
cron.schedule('* * * * *', () => {
  log("logs every minute");
});


//configure routes
app.get("/", (req, res) => {
  res.send("index route");
});
// start the server
app.listen(port, () => log(`Server: PORT ${port} active`));
