require('dotenv').config()
const express = require('express')
const app = express()
const pokemon = require('./models/pokemon.js');
const mongoose = require('mongoose')
const Pokemons = require('./models/pokemons.js')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    // useCreateIndex: true,
    //Create user index was depecrated.
})

mongoose.connection.once('open', () =>{
    console.log('connected to mongoDB')
})


//Setting up the views
app.set('views',__dirname + '/views');
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//Middleware
app.use((req, res, next) =>{
    console.log("Running all routes")
    next();
})
//this allow the body of a post request
app.use(express.urlencoded({extended:false})); 

app.get('/', (req, res) => {
    res.send("Welcome to the Pokemon App!")
})



//Index
app.get('/pokemon', async (req, res) =>{
    const foundPokemon = await Pokemons.find({})
    res.render('Index', {
        pokemon: foundPokemon
    })
})

//New
app.get('/pokemon/new', async(req, res) => {
    res.render('New');
})
//Create
app.post('/pokemon', async (req, res) =>{
    const newPokemon = await Pokemons.create({
        name: req.body.name,
        img: 'http://img.pokemondb.net/artwork/' + req.body.name
    })
    console.log(newPokemon)
    res.redirect('/pokemon')
})
//Show
app.get('/pokemon/:id', async (req, res) => {
    const onePokemon = await Pokemons.findById(req.params.id)
    res.render("Show", {
        pokemon: onePokemon
    })
})









app.listen(3000, () =>{
    console.log('Listening at port 3000')
})