const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const users = require("./routes/users");
const authRoutes = require("./routes/auth");
const auth = require("./middleware/auth");
const protectedRoutes = require("./routes/protectedRoutes");

// Load environment variables
dotenv.config({ path: "./.env" });

const app = express();
const port = process.env.PORT || 5501;

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Frontend URL
    credentials: true, // Allow cookies to be sent
  })
);
app.use(express.json());
app.use(cookieParser());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/users", users);
app.use("/api/auth", authRoutes);

// Protected Route Example
app.get("/api/protected", auth, (req, res) => {
  res.status(200).json({ message: "This is a protected route" });
});

// Fetching login data
app.get("/api/user/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // Replace with your user-fetch logic
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
