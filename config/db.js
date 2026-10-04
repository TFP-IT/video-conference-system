const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql://myroot:myroot123@localhost:3306/video_conference');

function dbConnect() {
    sequelize.authenticate()
        .then(() => {
            console.log('Database connected');
        })
        .catch((err) => {
            console.error('Unable to connect to the database:', err);
        });
}

module.exports = { dbConnect, sequelize };