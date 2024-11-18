const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors({
  origin: "https://wedding-invitation-myk.netlify.app",
  methods: ["GET", "POST"],
}));

const filePath = path.join(__dirname, "data.json");

app.get("/api/data", (req, res) => {
  const data = fs.readFileSync(filePath, "utf8");
  res.json(JSON.parse(data));
});

app.post("/api/data", (req, res) => {
  const data = req.body;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
  res.status(200).send("data saved correctly");
});

const PORT = 10000;
app.listen(PORT, () => console.log(`server runnig on http://localhost:${PORT}`));
