const express = require("express");
const cors = require("cors");
require("express-async-errors");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);  // ✅ REGISTER PRODUCT ROUTE HERE
app.use("/api/cart", cartRoutes);

// Health check
app.get("/", (req, res) => res.send("✅ API Running"));

// Error handler must be last
app.use(errorHandler);

module.exports = app;
