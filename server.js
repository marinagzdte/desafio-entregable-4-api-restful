const express = require('express')
const { Router } = express
const Container = require('./Container.js')

const app = express()

const router = Router()
router.use(express.json())
router.use(express.urlencoded({ extended: true }))

const productContainer = new Container()

router.get('', (req, res) => {
    res.json(productContainer.getAllItems())
})

router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    const product = productContainer.getItemById(id)

    if (product === null) {
        res.status(404)
        res.json({ error: 'producto no encontrado' })
    }
    else
        res.json(product)
})

router.post('', (req, res) => {
    const newProduct = req.body
    res.json(productContainer.add(newProduct))
})

router.put('/:id', (req, res) => {
    const id = Number(req.params.id)
    const newData = req.body
    const product = productContainer.modifyItemById(id, newData)

    if (product === null) {
        res.status(404)
        res.json({ error: 'producto no encontrado' })
    }
    else
        res.json(product)
})

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    const product = productContainer.deleteItemById(id)

    if (product === null) {
        res.status(404)
        res.json({ error: 'producto no encontrado' })
    }
    else
        res.json(product)
})

app.use(express.static('public'))
app.use('/api/productos', router)

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en servidor ${error}`))