require("dotenv").config();
const express = require("express");
const pool = require("./db");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]);
  } catch (err) {
    console.log(err.message, err.stack);
    res.status(500).send("database connection failed");
  }
});

const fetchImageRoute = require("./routes/getImages");
const signUp = require("./routes/signUp");
const usersRoute = require("./routes/users");
app.use(express.json());
app.use(cors());
app.use("/api/images", fetchImageRoute);
app.use("/api/auth", signUp);
app.use("/api/users", usersRoute);

app.listen(PORT, () => {
  console.log(
    `server is running on port ${PORT} click http://localhost:5000/test-db`
  );
});
