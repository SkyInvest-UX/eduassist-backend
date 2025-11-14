require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const requestRoutes = require('./routes/requests');

app.use(cors());
app.use(bodyParser.json());
app.use('/requests', requestRoutes);

app.get('/', (req, res) => res.send('EduAssist Backend is running'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
