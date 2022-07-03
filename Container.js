class Container {
    constructor() {
        this.array = [
            {
                title: "Escuadra",
                price: "123.45",
                thumbnail: "/public/escuadra.jpg",
                id: 1 
            },
            { 
                title: "Globo terráqueo",
                price: "234.56",
                thumbnail: "/public/globo-terraqueo.jpg",
                id: 2 
            },
            { 
                title: "Calculadora",
                price: "345.67",
                thumbnail: "/public/calculadora.jpg",
                id: 3
            }
        ]
    }

    getAllItems() {
        return this.array
    }

    getItemById(id) {
        return this.array[id - 1]
    }

    add(item) {
        const currentLength = this.array.length
        item.id = currentLength === 0 ? 1 : this.array[currentLength - 1].id + 1
        this.array.push(item)
        console.log(this.array)
        return item
    }

    modifyItemById(itemId, newData) {
        const index = this.array.findIndex(someItem => someItem.id === itemId)
        if (index === -1)
            throw new Error(`No se encontró el objeto.`)
        
        this.array[index].title = newData.title
        this.array[index].price = newData.price
        this.array[index].thumbnail = newData.thumbnail

        return this.array[index]
    }

    deleteItemById(id) {
        const index = this.array.findIndex(item => item.id === id)
        if (index === -1)
            throw new Error(`No se encontró el objeto.`)
        
        return this.array.splice(index, 1)
    }
}

module.exports = Container