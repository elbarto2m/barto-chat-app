import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// 🔍 Add this line here
console.log("🔍 MONGO_URL from .env:", process.env.MONGO_URL);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default connectDB;
