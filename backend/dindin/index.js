const express = require('express');
const routes = require('./routes/routes');
require('./database')


const app = express();
app.use(express.urlencoded({ extended: false }));


app.use(express.json());
app.use(routes);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3333;
}
app.listen(port);