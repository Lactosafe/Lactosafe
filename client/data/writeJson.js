const jsonfile = require('jsonfile')

const file = '/Users/prmri/Learning/Lactosafe/client/data/data.json'

    ;
const obj = {
    "networkparticipant":
        [
            {

                firstName: 'Josheph',
                lastName: 'Mathew',
            },
            {
                firstName: 'Srikant',
                lastName: 'shekhar',
            },
            {
                firstName: 'Neha',
                lastName: 'Verma',
            }
        ],
    "adminTransaction":
        [
            {
                name: 'addUser',
                date: '31/08/2022',
            },
            {
                name: 'updateUser',
                date: '21/08/2022',
            },
            {
                name: 'deleteUser',
                date: '01/09/2022',
            }
        ],
    "approvalPending":
        [
            {
                firstName: 'Suresh',
                lastName: 'Patwari',
            },
            {
                firstName: 'kamal',
                lastName: 'khudania',
            },
            {
                firstName: 'Nikita',
                lastName: 'Shahi',
            },
            {
                firstName: 'kavita',
                lastName: 'Tripathi',
            },
        ]
}

jsonfile.writeFileSync(file, obj, { spaces: 2, finalEOL: false })


