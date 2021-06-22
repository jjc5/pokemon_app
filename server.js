require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Pokemon = require('./models/pokemon');



const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use((req, res, next) => {
  console.log('I run before all routes')
  next()
})
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

/*SEED ROUTE*/
app.get('/pokemon/seed', (req, res)=>{
    Pokemon.create([
      {name: "bulbasaur", type: "grass poison", img: "http://img.pokemondb.net/artwork/bulbasaur.jpg"},
      {name: "ivysaur", type: "grass poison", img: "http://img.pokemondb.net/artwork/ivysaur.jpg"},
      {name: "venusaur", type: "grass poison", img: "http://img.pokemondb.net/artwork/venusaur.jpg"},
      {name: "charmander", type: "fire", img: "http://img.pokemondb.net/artwork/charmander.jpg"},
      {name: "charizard", type: "fire dragon", img: "http://img.pokemondb.net/artwork/charizard.jpg"},
      {name: "squirtle", type: "water", img: "http://img.pokemondb.net/artwork/squirtle.jpg"},
      {name: "wartortle", type: "water", img: "http://img.pokemondb.net/artwork/wartortle.jpg"}
    ], (err, data)=>{
        res.redirect('/pokemon');
    })
});


/*INDEX*/
app.get('/pokemon/', (req, res) => {
  Pokemon.find({}, (err, createdPokemon) =>{
    if(err){
      res.status(404).send({
        msg: err.message
      })
    }else {
      res.render('Index', {
        pokemon: createdPokemon
      })
    }
  })
});

/*NEW*/
app.get('/pokemon/new', (req, res) => {
  res.render('New')
})

/*DELETE*/
/*UPDATE*/
/*CREATE*/
app.post('/pokemon', (req, res) => {
  Pokemon.create(req.body, (err, createdPokemon)=>{
    if(err){
      res.status(404).send({
        msg: err.message
      })
    }else{
      console.log(createdPokemon);
      res.redirect('/pokemon')
    }


    });

})


/*EDIT*/

/*SHOW*/
app.get('/pokemon/:id', (req, res) => {
  Pokemon.findById(req.params.id, (err, createdPokemon)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Show', {
        pokemon: createdPokemon
      })
    }
  })
})




app.listen(PORT, () => {
  console.log('i love you ', PORT)
});
