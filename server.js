const express = require('express');
const app = express();
const PORT = 3000;
const pokemon = require('./models/pokemon');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())


app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
  res.render('Index', {pokemon: pokemon});
});

app.get('/pokemon/:id', (req, res) => {
  res.send(req.params.id);
})









app.listen(PORT, () => {
  console.log('i love you ', PORT)
});
