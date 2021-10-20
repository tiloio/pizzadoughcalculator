import type { Recipe } from "./recipe";

export const Napolitan: Recipe = {
    name: {
        de: 'Neapolitanisch',
        en: 'Neapolitan',
        nl: 'Napolitaans'
    },
    ingredients: [
        {
            name: {
                de: 'Brotmehl',
                en: 'regular bread flour'
            },
            flour: 100,
            salt: 3,
            yeast: 0.2,
            water: 55
        }, {
            name: {
                de: 'italienisches Tipo 00',
                en: 'italien tipo 00'
            },
            flour: 100,
            salt: 3,
            yeast: 0.2,
            water: 65
        }
    ],
    steps: [{
        name: {
            en: 'Water into bowl'
        },
        video: { link: "https://www.youtube.com/watch?v=HkXojFU_LrE&t=162s", second: 162 }
    }],
    sizes: [{
        name: {
            en: 'S Pizza',
        },
        gram: 160,
        diameterInCm: 16
    }, {
        name: {
            en: 'M Pizza',
        },
        gram: 230,
        diameterInCm: 28
    }, {
        name: {
            en: 'L Pizza',
        },
        gram: 300,
        diameterInCm: 34
    },]
}