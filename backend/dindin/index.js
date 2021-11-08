const express = require('express');
const routes = require('./routes/routes');


const app = express();
app.use(express.urlencoded({ extended: false }));


app.use(routes);
app.use(express);
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);