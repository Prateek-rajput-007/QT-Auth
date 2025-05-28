const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "https://qt-auth.vercel.app", // Directly using the client URL
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);app.use(express.json());

// Connect to MongoDB
connectDB();

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
