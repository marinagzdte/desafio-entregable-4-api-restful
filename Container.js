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
        const index = this.array.findIndex(item => item.id === id)
        if (index === -1)
            return null

        return this.array[index]
    }

    add(item) {
        const currentLength = this.array.length
        item.id = currentLength === 0 ? 1 : this.array[currentLength - 1].id + 1
        this.array.push(item)
        
        return item
    }

    modifyItemById(id, newData) {
        const index = this.array.findIndex(item => item.id === id)
        if (index === -1)
            return null

        this.array[index].title = newData.title
        this.array[index].price = newData.price
        this.array[index].thumbnail = newData.thumbnail

        return this.array[index]
    }

    deleteItemById(id) {
        const index = this.array.findIndex(item => item.id === id)
        if (index === -1)
            return null

        return this.array.splice(index, 1)[0]
    }
}

module.exports = Container