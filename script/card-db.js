export const cardDB = [{
        id: 1,
        title: 'title #1',
        description: 'description #1',
        price: '$ 100'
    },
    {
        id: 2,
        title: 'title #2',
        description: 'description #2',
        price: '$ 200'
    },
    {
        id: 3,
        title: 'title #3',
        description: 'description #3',
        price: '$ 300'
    },
    {
        id: 4,
        title: 'title #4',
        description: 'description #4',
        price: '$ 400'
    },
    {
        id: 5,
        title: 'title #5',
        description: 'description #5',
        price: '$ 500'
    },
    {
        id: 6,
        title: 'title #6',
        description: 'description #6',
        price: '$ 600'
    },
    {
        id: 7,
        title: 'title #7',
        description: 'description #7',
        price: '$ 700'
    },
    {
        id: 8,
        title: 'title #8',
        description: 'description #8',
        price: '$ 800'
    },
    {
        id: 9,
        title: 'title #9',
        description: 'description #9',
        price: '$ 900'
    },
    {
        id: 10,
        title: 'title #10',
        description: 'description #10',
        price: '$ 1000'
    },
    {
        id: 11,
        title: 'title #11',
        description: 'description #11',
        price: '$ 1100'
    },
    {
        id: 12,
        title: 'title #12',
        description: 'description #12',
        price: '$ 1200'
    },
    {
        id: 13,
        title: 'title #13',
        description: 'description #13',
        price: '$ 1300'
    },
    {
        id: 14,
        title: 'title #14',
        description: 'description #14',
        price: '$ 1400'
    },
]

// export const menu = {
//     label: 'Beverages',
//     label: 'Beverages2',
//     children: [
//         { label: 'Water' },
//         { label: 'Coffee' },
//         {
//             label: 'Tea',
//             children: [
//                 { label: 'Black Tea' },
//                 { label: 'White Tea' },
//                 {
//                     label: 'Green Tea',
//                     children: [
//                         { label: 'Sencha' },
//                         { label: 'Gyokuro' },
//                         { label: 'Matcha' },
//                         { label: 'Pi Lo Chun' }
//                     ]
//                 }
//             ]
//         }
//     ],
// };

export const menu = [ //Массив с данными
    { "name": "item 1" },
    { "name": "item 2" },
    {
        "name": "item 3",
        "children": [{
                "name": "sub item 1",
                "children": [{
                    "name": "sub sub item 1",
                }]
            },
            { "name": "sub item 2" },
            { "name": "sub item 3" },
            { "name": "sub item 4" }
        ]
    },
    { "name": "item 4" }
];