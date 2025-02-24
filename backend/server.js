const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/ToDoRoutes');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log(error));
    app.use(router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));