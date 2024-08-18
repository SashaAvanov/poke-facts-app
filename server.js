const express = require('express')
const app = express()
const PORT = 2121

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index.ejs', {message: null})
})

app.get('/getPokemon', async (req, res) => {
    const params = req.query
    const name = params.input.toLowerCase()

    const url = 'https://pokeapi.co/api/v2/pokemon/'+ name

    try {
        console.log(url)
        const response = await fetch(url)
        const data = await response.json() 
        res.render('facts.ejs', {info: data})
    } catch (err) {
        console.log(err)
        res.render('index.ejs', {message: "Please enter a valid Pokémon name"})
    }
})
 
app.listen(process.env.PORT || PORT, ()=>{
    console.log('Server is running')
})    