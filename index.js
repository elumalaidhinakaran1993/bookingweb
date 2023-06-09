require("dotenv").config();
const express = require("express");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
 const { responseUtil } = require('./utils/resopnseFormat')
// const { corsOptions } = require('./utils/common.util')

const app = express();
// app.use(cors(corsOptions));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(responseUtil)
 app.use(require("./routes/route"));

let options = {
  retain: true,
  qos: 1,
};





require("./models/index").sequelize.sync().then(() => {
  console.log('database sync success...')
});

var server = app.listen(process.env.PORT, function () {
  console.log("Ready on port %d", server.address().port);
});
