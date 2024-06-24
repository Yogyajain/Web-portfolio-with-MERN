// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const errorHandler=require("c:/Users/hp/Desktop/Github/Web-portfolio-with-MERN/webops/backend/middleware/errorHandler");
const connectDb = require("./config/dbConnection");

const dotenv = require('dotenv');

dotenv.config(); // Load environment variables
  
const app = express();
const PORT = process.env.PORT || 5000;

connectDb();

app.use(cors());
app.use(express.json());
app.use('/api/projects', require('./routes/projects'));
// Sample route
app.use("/api/contacts",require("./routes/contact_routes"));
app.use("/api/user",require("./routes/userRoute"));
app.use(errorHandler);
// Connect to MongoDB
/*
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});*/

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});