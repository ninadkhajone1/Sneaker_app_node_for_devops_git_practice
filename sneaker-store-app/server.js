const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const products = [
  { id: 1, name: "Air Runner 90", category: "Running", price: 120, color: "#e8e4dc", icon: "👟" },
  { id: 2, name: "Court Classic", category: "Lifestyle", price: 95, color: "#f1d9c4", icon: "👟" },
  { id: 3, name: "Hoop Elite", category: "Basketball", price: 150, color: "#d6e0f0", icon: "🏀" },
  { id: 4, name: "Trail Blazer", category: "Running", price: 135, color: "#d9e6d2", icon: "🥾" },
  { id: 5, name: "Street Low", category: "Lifestyle", price: 85, color: "#f0e2e2", icon: "👟" },
  { id: 6, name: "Dunk Pro", category: "Basketball", price: 140, color: "#e3dcf0", icon: "🏀" },
  { id: 7, name: "Sprint Flex", category: "Running", price: 110, color: "#f5ecc8", icon: "👟" },
  { id: 8, name: "Cloud Walker", category: "Lifestyle", price: 99, color: "#d4ebe8", icon: "👟" },
];

app.use(express.static(path.join(__dirname, "public")));
app.get("/api/products", (req, res) => res.json(products));
app.get("/health", (req, res) => res.json({ status: "ok" }));

app.listen(PORT, () => console.log(`Sneaker store running on port ${PORT}`));
