require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { CharacterController } = require('./controllers');
const Middleware = require('./middleware');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => {
  return res.status(200).json({
    message: 'Welcome Muggles!!!',
  })
});

app.get('/character', CharacterController.getAll);
app.get('/character/:id', CharacterController.findById);
app.post('/character', CharacterController.create);
app.put('/character/:id', CharacterController.update);
app.delete('/character/:id', CharacterController.delete);

app.use(Middleware.error);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}...`));
