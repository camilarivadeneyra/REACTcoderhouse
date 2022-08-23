const products = [
    {
        id: '1',
        name: 'PEINE',
        price: '800',
        category: 'cuidadocapilar',
        img: 'https://i0.wp.com/chufasustentable.com/wp-content/uploads/2022/02/peine.jpg?fit=708%2C835&ssl=1',
        stock: '20',
        description: 'Peine de madera de reforestación. Brindan una mayor suavidad y mejor desempeño sobre el cabello y el cuero cabelludo. 100% natural y vegano.',
    },

    {
        id: '2',
        name: 'VELAS DE SOJA',
        price: '980',
        category: 'aromaterapia',
        img: 'https://i0.wp.com/chufasustentable.com/wp-content/uploads/2021/05/1620-Vela-de-Soja-Caixa-Madera.jpg?fit=1000%2C1125&ssl=1',
        stock: '25',
        description: 'Perfume en vela por mas de 15hs. Formula original que combina aceites vegetales, pabilos de algodón 100%, envases reutilizables y deliciosas fragancias.',
    },

    {
        id: '3',
        name: 'CEPILLOS DE DIENTES',
        price: '310',
        category: 'cuidadopersonal',
        img: 'https://i0.wp.com/chufasustentable.com/wp-content/uploads/2020/07/1951-Cepillos-de-Dientes-Meraki.jpg?fit=1000%2C1125&ssl=1',
        stock: '30',
        description: 'Cepillos biodegradales, fabricados con madera de bambu. Evitando asi el consumo excesivo de plástico que se utiliza en los cepillos tradicionales.',
    }
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}