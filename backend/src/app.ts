import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

// Load environment variables (updated with user MongoDB credentials)
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Enable CORS for frontend communication
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parser
app.use(express.json());

// ==========================================
// MONGODB SETUP
// ==========================================
if (MONGO_URI) {
  mongoose.connect(MONGO_URI)
    .then(() => console.log('[MongoDB] Connected successfully'))
    .catch((err) => {
      console.error('[MongoDB] Connection failed on startup:', err.message);
      console.warn('[MongoDB] Server will fall back to logging submissions to console.');
    });
} else {
  console.warn('[MongoDB] Warning: MONGO_URI is not set in environment variables.');
}

// Define Enquiry Schema & Model
const EnquirySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phoneNumber: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now }
});

const Enquiry = mongoose.model('Enquiry', EnquirySchema);

// ==========================================
// API ENDPOINTS
// ==========================================

// POST endpoint for submitting registrations
app.post('/api/enquiry', async (req, res) => {
  const { name, email, phoneNumber } = req.body;

  // 1. Validation Logic
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: 'Name is required and must be at least 2 characters long'
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    return res.status(400).json({
      success: false,
      message: 'A valid email address is required'
    });
  }

  const phoneRegex = /^\+?[0-9\s\-]{10,15}$/;
  if (!phoneNumber || typeof phoneNumber !== 'string' || !phoneRegex.test(phoneNumber.trim())) {
    return res.status(400).json({
      success: false,
      message: 'Phone number must contain only numbers, spaces, or hyphens, and be between 10 to 15 digits'
    });
  }

  // 2. Database Action
  try {
    const enquiryData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phoneNumber: phoneNumber.trim()
    };

    // Log detail for visibility
    console.log('[Enquiry Submission Received]', enquiryData);

    // Save to MongoDB if connected, otherwise log to in-memory/console as fallback
    if (mongoose.connection.readyState === 1) {
      const dbEnquiry = new Enquiry(enquiryData);
      await dbEnquiry.save();
      console.log('[MongoDB] Enquiry saved successfully');
    } else {
      console.warn('[MongoDB] Warning: DB not connected. Saved registration in memory log only.');
    }

    return res.status(201).json({
      success: true,
      message: 'Registration received successfully'
    });
  } catch (error: any) {
    console.error('[Error] Failed to save enquiry:', error.message || error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process enquiry registration due to a server error'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date()
  });
});

// Start the server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`[Server] Kidrove Backend running on port ${PORT}`);
  });
}

export default app;
