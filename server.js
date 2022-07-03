const express = require('express')
const { Router } = express
const Container = require('./Container.js')

const app = express()

const router = Router()
router.use(express.json())
router.use(express.urlencoded({extended: true}))

const productContainer = new Container()

router.get('', (req, res) => {
    res.json(productContainer.getAllItems())
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.json(productContainer.getItemById(id))
})

router.post('', (req, res) => {
    const newProduct = req.body
    res.json(productContainer.add(newProduct))
})

router.put('/:id', (req, res) => {
    const productId = Number(req.params.id)
    const newData = req.body
    res.json(productContainer.modifyItemById(productId, newData))
})

router.delete('/:id', (req, res) => {
    const productId = Number(req.params.id)
    res.json(productContainer.deleteItemById(productId))
})

app.use('/api/productos', router)

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en servidor ${error}`))