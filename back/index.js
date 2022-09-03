require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => {
  return res.status(200).json({
    message: 'Welcome Muggles!!!',
  })
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}...`));
