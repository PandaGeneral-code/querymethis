const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const { restart } = require("nodemon");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/posts", (req, res, next) => {
  res.status(200).json([
    {
      postBody: "This is the first post",
      postId: "1",
      postTitle: "Hello from the first post.",
    },
  ]);
});

app.listen(5000, () => console.log("Server is listening on port 5000..."));
