const products = [
    {
        id: '1',
        name: 'PEINE',
        price: '800',
        category: 'CUIDADO CAPILAR',
        img: 'https://chufasustentable.com/1980-medium_default/peine-con-mango.jpg',
        stock: '20',
        description: 'Peine de madera de reforestación. Brindan una mayor suavidad y mejor desempeño sobre el cabello y el cuero cabelludo. 100% natural y vegano.',
    },

    {
        id: '2',
        name: 'VELA DE SOJA',
        price: '980',
        category: 'AROMATERAPIA',
        img: 'https://chufasustentable.com/1620-medium_default/vela-de-soja-caixa-madera.jpg',
        stock: '25',
        description: 'Perfume en vela por mas de 15hs. Formula original que combina aceites vegetales, pabilos de algodón 100%, envases reutilizables y deliciosas fragancias.',
    },

    {
        id: '3',
        name: 'CEPILLO DE DIENTES',
        price: '310',
        category: 'CUIDADO PERSONAL',
        img: 'https://chufasustentable.com/1951-medium_default/cepillos-de-dientes-meraki.jpg',
        stock: '30',
        description: 'Cepillos biodegradales, fabricados con madera de bambu. Evitando asi el consumo excesivo de plástico que se utiliza en los cepillos tradicionales.',
    }
]

export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        const productsFiltered = products.filter(prod => prod.category === categoryId)

        setTimeout(() => {
            resolve(categoryId ? productsFiltered : products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}
