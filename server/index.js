require("dotenv").config();
const express = require("express");
const pool = require("./db");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).send("database connection failed");
  }
});
const uploadRoutes = require("./routes/upload");
const fetchImageRoute = require("./routes/getImages");
app.use("/api", uploadRoutes);
app.use("/api/images", fetchImageRoute);

app.listen(PORT, () => {
  console.log(
    `server is running on port ${PORT} click http://localhost:5000/test-db`
  );
});
