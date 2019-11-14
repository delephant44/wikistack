const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index');

const app = express();

const { db } = require('./models/index'); //aquiring our database
/* the above can be done like this:
//const main = require('./models/index')
//main.db
//main.fun
*/

// const userRouter = require("./routes/user.js");
const wikiRouter = require("./routes/wiki.js");

app.use("/wiki", wikiRouter);
// app.use("/user", userRouter);

db.authenticate().then(() => {
  console.log('connected to the database');
});

app.use(morgan('dev'));

const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

app.use(express.static('/public'));

app.use('/', routes);

async function initializeSyncDatabase() {
    //await db.sync({force: true})
  await db.sync();
  app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
  });
}

initializeSyncDatabase();

// Try getting your main layout to display when you visit http://localhost:3000.
// You can do this by passing an empty string to your layout
// function and res.sending it in your main route.
