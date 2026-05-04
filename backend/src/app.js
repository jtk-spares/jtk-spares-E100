const express = require('express');
const cors = require('cors');

const quoteRoutes = require('./routes/quotes');
const partRoutes = require('./routes/parts');
const inquiryRoutes = require('./routes/inquiries');
const diagnosisRoutes = require('./routes/diagnoses');
const adminRoutes = require('./routes/admin');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');

const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:5173',
];

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error('Origin is not allowed by CORS'));
  },
  credentials: true,
}));

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'jtk-api',
    timestamp: new Date().toISOString(),
  });
});

app.use('/api/quotes', quoteRoutes);
app.use('/api/parts', partRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/diagnoses', diagnosisRoutes);
app.use('/api/admin', adminRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
