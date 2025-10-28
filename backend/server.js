const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/admin",
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log("MongoDB connected ✅"))
.catch(err => console.error("MongoDB connection error ❌", err));

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Start server
app.listen(port, () => console.log(`Server running on port ${port} 🚀`));
