const express = require("express");
const app = express();
const db = require("./models");
const postsRouter = require("./routes/PostsRouter");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/posts", postsRouter);
db.sequelize.sync().then(() => {
  app.listen(8888, () => {
    console.log(`listening on port 8888`);
  });
});
