const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {MenuItem} = require('./MenuItem')
const {loadAndInsert} = require('./populateDB');
const { request } = require('express');

const app = express();
const port = 3000;

// setup our templating engine
const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})
app.engine('handlebars', handlebars)
app.set('view engine', 'handlebars')

// serve static assets from the public/ folder
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// this route matches any GET request to the http://localhost:3000
app.get('/', async (req, res) => {
    const restaurants = await Restaurant.findAll({
        include: [
            {
                model: Menu, as: 'menus',
                include: [{model:MenuItem, as: 'items'}]
            }
        ],
        nest: true
    })
    res.render('home', {restaurants})
})

app.get('/about/:id', async (req, res) => {
    const restaurants = await Restaurant.findOne({
        where: {
            id:req.params.id
        },
        include: [
            {
                model: Menu, as: 'menus',
                include: [{model:MenuItem, as: 'items'}]
            }
        ],
        nest: true
    })
    res.render('about', {restaurant:restaurants})
})

app.get('/form', async (req, res) => {
    res.render('form')
})

app.post('/restaurants', async (req, res) => {
    console.log(req.body); // this is the JSON body
    const restaurant = await Restaurant.create(req.body)
    res.redirect('/')
})

app.get('/about/:id/delete', (req, res) => {
    Restaurant.findByPk(req.params.id)
        .then(restaurant => {
            restaurant.destroy()
            res.redirect('/')
        })
})

app.get('/about/:id/edit', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id)
    res.render('edit', {restaurant})
})

app.post('/submit/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id)
    await restaurant.update(req.body)
    res.redirect(`/about/${restaurant.id}`)
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})