const express = require('express');
const helmet = require('helmet');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());
app.use(helmet());

connectDB();
app.use('/api/users', userRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
