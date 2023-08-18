const express = require('express')
const app = express()
const pokemons = require('./models/pokemon');

//Setting up the views
app.set('views',__dirname + '/views');
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.get('/', (req, res) => {
    res.send("Welcome to the Pokemon App!")
})

//Index
app.get('/pokemon',(req, res) => {
    res.render("views/Index.js")
})









app.listen(3000, () =>{
    console.log('Listening at port 3000')
})