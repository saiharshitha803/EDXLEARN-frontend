require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.js");

const app = express();
app.use(cors({ origin: "*" }));

app.use(express.json());

app.use("/api/user", userRoutes);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`connected to db & listening on port:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
