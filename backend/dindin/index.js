const express = require('express');
const routes = require('./routes/routes');
require('dotenv').config()



const app = express();
app.use(express.urlencoded({ extended: false }));


app.use(routes);
app.use(express);
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}
app.listen(port);