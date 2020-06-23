// require dependencies
const express = require("express");
const log = console.log;
// initialize express and port number
const app = express();
const port = 3000;
// cron function
function cron(ms, fn) {
  function cb() {
    clearTimeout(timeout);
    timeout = setTimeout(cb, ms);
    fn();
  }
  let timeout = setTimeout(cb, ms);
  return () => {};
}
// setup middlewares
cron(2000, () => log("cron job"));

//configure routes
app.get("/", (req, res) => {
  res.send("index route");
});
// start the server
app.listen(port, () => log(`Server: PORT ${port} active`));
