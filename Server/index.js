const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
const postsRoutes = require("./routes/postsRoutes");
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const port = process.env.PORT || 5000;
const db = process.env.MONGO_URL;
const prefix = "/api/v1"

app.use(express.json());

// Routes for authentication
app.use(`${prefix}/auth`, authRoutes);

// Routes for posts
app.use(`${prefix}/posts`, postsRoutes);

// Routes for user
app.use(`${prefix}/users`, userRoutes);

mongoose
  .connect(db )
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
