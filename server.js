require("dotenv").config();
const express = require("express");
const mongoose = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const purchaseRoutes = require("./routes/purchaseRoutes");
const cartRoutes = require("./routes/cartRoutes");
const app = express();

const PORT = process.env.PORT || 3004;

app.use(express.json());
app.use("/", (req, res) => {
  res.send("Hey you are on the home page.");
});

app.listen(PORT, (req, res) => {
  console.log(`App is listening on this port - ${PORT}`);
});

app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes);
app.use("/api/purchase", purchaseRoutes);
app.use("/api/cart", cartRoutes);
