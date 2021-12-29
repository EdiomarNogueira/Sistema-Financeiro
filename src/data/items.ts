import { Item } from '../types/Item';

export const items: Item[] = [ //Usando items: Item[] eu digo que quero um array de item 
    { date: new Date(2021, 10, 4), category: 'food', title: 'McDonalds', value: 32.12 },
    { date: new Date(2021, 10, 5), category: 'salary', title: 'Salário ACME', value: 1900 },
    { date: new Date(2021, 10, 10), category: 'food', title: 'Burger King', value: 28 },
    { date: new Date(2021, 10, 18), category: 'rent', title: 'Aluguel Apt', value: 680 },
    { date: new Date(2021, 10, 30), category: 'food', title: 'McDonalds', value: 32.12 },
    { date: new Date(2021, 11, 5), category: 'salary', title: 'Salário ACME', value: 1900 },
    { date: new Date(2021, 11, 6), category: 'food', title: 'Burger King', value: 28 },
    { date: new Date(2021, 11, 15), category: 'rent', title: 'Aluguel Apt', value: 680 },
];