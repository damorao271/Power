require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
// Routes
const users = require("./routes/users");
const types = require("./routes/types");

// Puertos y URL
const uri = process.env.ATLAS_URI;
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/users", users);
app.use("/types", types);

// Connetc to ATLAS
mongoose
  .connect(uri, {
    dbName: "second",
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas ..."))
  .catch((err) => console.error("Could not connect to MongoDB !!!"));

app.listen(PORT, console.log(`Listening on port ${PORT}`));
