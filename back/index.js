require('dotenv').config();
const express = require('express');
const cors = require('cors');

const port = process.env.API_PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => {
  return res.status(200).json({
    message: 'Welcome Muggles!!!',
  })
});

app.listen(port, () => console.log(`Ouvindo na porta ${port}...`));
