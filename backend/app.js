const express = require('express');
//  const router = express.Router();
//  const bcrypt = require('bcryptjs');
const UserModel = require('../models/User');
const { route } = require('./routes/route');

routes/route.js

const app = express();
const PORT = 3000;

// Use the API routes
app.use('/api', routes);

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
