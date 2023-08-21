const express = require('express')
const app = express()
const pokemon = require('./models/pokemon');

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
app.get('/pokemon', (req, res) =>{
    res.render('Index', {
        pokemon: pokemon
    })
})

//New
app.get('/pokemon/new', (req, res) => {
    res.render('New');
})
//Create
app.post('/pokemon', (req, res) =>{
    const newPokemon ={
        name: req.body.name,
        img: 'http://img.pokemondb.net/artwork/' + req.body.name
    }
    pokemon.push(newPokemon)
    res.redirect('/pokemon')
})
//Details
app.get('/pokemon/:id',(req, res) => {
    res.render("Show", {
        pokemon: pokemon[req.params.id]
    })
})









app.listen(3000, () =>{
    console.log('Listening at port 3000')
})