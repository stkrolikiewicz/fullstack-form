import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import answers from './routes/answers.js';

// Initialize express
const app = express();

// Load environment variables
dotenv.config();
const {PORT, DB_CONNECTION_URI} = process.env;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/answers', answers);

// Connect to MongoDB
mongoose
  .connect(DB_CONNECTION_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log(error.message));

// Start server
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
