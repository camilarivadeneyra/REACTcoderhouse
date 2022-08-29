const products = [
    {
        id: '1',
        name: 'PEINES CON MANGO',
        price: '1050',
        category: 'cuidadocapilar',
        img: 'https://i0.wp.com/chufasustentable.com/wp-content/uploads/2022/02/peine.jpg?fit=708%2C835&ssl=1',
        stock: '20',
        description: 'Peine de madera de reforestación. Brinda una mayor suavidad y mejor desempeño sobre el cabello y el cuero cabelludo. 100% natural y vegano.',
    },

    {
        id: '2',
        name: 'SHAMPOO SOLIDO RUH',
        price: '920',
        category: 'cuidadocapilar',
        img: 'https://i0.wp.com/chufasustentable.com/wp-content/uploads/2020/07/shampoo-normal.jpg?resize=600%2C708&ssl=1',
        stock: '20',
        description: 'Realizado con materias primas 100% naturales, apto vegano y cruelty free. Libre de químicos, sulfatos y parabenos.',
    },

    {
        id: '3',
        name: 'ACONDICIONADOR SOLIDO RUH',
        price: '960',
        category: 'cuidadocapilar',
        img: 'https://i0.wp.com/chufasustentable.com/wp-content/uploads/2020/07/acondicionador.jpg?fit=708%2C835&ssl=1',
        stock: '18',
        description: 'Realizado con materias primas 100% naturales, apto vegano y cruelty free. Libre de químicos, sulfatos y parabenos.',
    },

    {
        id: '4',
        name: 'SERUM DE PUNTAS',
        price: '1020',
        category: 'cuidadocapilar',
        img: 'https://i0.wp.com/chufasustentable.com/wp-content/uploads/2021/07/serum-de-puntas.jpg?fit=708%2C835&ssl=1',
        stock: '12',
        description: 'Serum con aceite de argán, almendras y palta. Ideal para puntas resecas y pelos con frizz',
    },

    {
        id: '5',
        name: 'VELAS DE SOJA',
        price: '980',
        category: 'aromaterapia',
        img: 'https://i0.wp.com/chufasustentable.com/wp-content/uploads/2021/05/1620-Vela-de-Soja-Caixa-Madera.jpg?fit=1000%2C1125&ssl=1',
        stock: '15',
        description: 'Perfume en vela por mas de 15hs. Formula original que combina aceites vegetales, pabilos de algodón 100%, envases reutilizables y deliciosas fragancias.',
    },

    {
        id: '6',
        name: 'VARILLAS DE RATAN',
        price: '350',
        category: 'aromaterapia',
        img: 'https://i0.wp.com/chufasustentable.com/wp-content/uploads/2022/06/palitos.jpg?resize=600%2C708&ssl=1',
        stock: '18',
        description: 'Varillas de ratan para difusores.'
    },

    {
        id: '7',
        name: 'SAHUMERIOS LOTUS',
        price: '480',
        category: 'aromaterapia',
        img: 'https://i0.wp.com/chufasustentable.com/wp-content/uploads/2021/09/1918-Sahumerio-de-Lotus.jpg?fit=1000%2C1125&ssl=1',
        stock: '20',
        description: 'Lotus: paz y meditación. Contiende 10 sahumerios ecológicos y artesanales, hechos con aceites y esencias. Cada varilla tiene una duración de 40minutos.',
    },

    {
        id: '8',
        name: 'SAHUMERIOS NARDO',
        price: '480',
        category: 'aromaterapia',
        img: 'https://i0.wp.com/chufasustentable.com/wp-content/uploads/2021/09/1906-Sahumerio-de-Nardo.jpg?fit=1000%2C1125&ssl=1',
        stock: '10',
        description: 'Nardo: trabajo y estabilidad. Contiene 10 sahuemerios ecológicos y artesanales, hechos con aceites y escencias. Cada varilla tiene una duración de 40minutos.',
    },

    {
        id: '9',
        name: 'CEPILLOS DE DIENTES',
        price: '390',
        category: 'cuidadopersonal',
        img: 'https://i0.wp.com/chufasustentable.com/wp-content/uploads/2020/07/cepillos-.jpg?fit=708%2C835&ssl=1',
        stock: '20',
        description: 'Cepillos biodegradales, fabricados con madera de bambu. Evitando asi el consumo excesivo de plástico que se utiliza en los cepillos tradicionales.',
    },

    {
        id: '10',
        name: 'PASTA DENTAL EN PASTILLAS',
        price: '1000',
        category: 'cuidadopersonal',
        img: 'https://i0.wp.com/chufasustentable.com/wp-content/uploads/2020/07/bits.jpg?fit=708%2C835&ssl=1',
        stock: '12',
        description: 'Bits es una pasta dental innovadora en forma de comprimidos naturales, amigables con vos y el planeta. Hecho de ingredientes naturales, sin conservantes, libre de flúor y con sabor a menta. Formula vegana, sin TACC y no testeada en animales.',
    }
]


const timeout = 100;

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, timeout)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve (products.find (prod => {
                return prod.id === id
            }))
        }, timeout)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, timeout)
    })
}