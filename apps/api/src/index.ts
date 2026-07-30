import express from "express";

const app = express();
const PORT = 3001;

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "pizzeria-luna-api" });
});

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});