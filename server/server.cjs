const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

const filePath = path.join(__dirname, "data.json");

app.get("/api/data", (req, res) => {
  const data = fs.readFileSync(filePath, "utf8");
  res.json(JSON.parse(data));
});

app.post("/api/data", (req, res) => {
  const newData = req.body;
  fs.writeFileSync(filePath, JSON.stringify(newData, null, 2), "utf8");
  res.status(200).send("Datos guardados correctamente.");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
