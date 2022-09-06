const { User } = require('../models');

const userData = [{
        username: 'Alberta',
        password: 'ABsdk2'

    },
    {
        username: 'Jane',
        password: '600Jan'
    },
    {
        username: 'Georgepots',
        password: 'RandyCan222'
    },
    {
        username: 'AlphaJohn',
        password: 'Lostinspace12'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;