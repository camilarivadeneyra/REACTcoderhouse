const products = [
    {
        id: '1',
        name: 'CEPILLO DE DIENTES - Meraki',
        price: '310',
        category: 'Cuidado Bucal',
        img: 'https://chufasustentable.com/1951-large_default/cepillos-de-dientes-meraki.jpg',
        stock: '20',
        description: 'Cepillos biodegradales, fabricados con madera de bambu. Evitando asi el consumo excesivo de plástico que se utiliza en los cepillos tradicionales.'
    },

    {
        id: '2',
        name: 'SHAMPOO SOLIDO - CABELLO NORMAL',
        price: '960',
        category: 'Limpieza Personal',
        img: 'https://chufasustentable.com/2378-large_default/shampoo-rosehip-cabello-normal.jpg',
        stock: '25',
        description: 'Componentes biodegradables, realizado de materias primas 100%naturales, apto vegano y cruelty free. Libre de quimicos, sulfatos y parabenos.',
    },

    {
        id: '3',
        name: 'VELA DE SOJA',
        price: '980',
        category: 'Aromaterapia',
        img: 'https://chufasustentable.com/1620-large_default/vela-de-soja-caixa-madera.jpg',
        stock: '15',
        description: 'Perfume en vela por mas de 15hs. Formula original que combina aceites vegetales, pabilos de algodón 100%, envases reutilizables y deliciosas fragancias.',
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 2000)
    })
}