const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const fun = () => {
    console.log('FUN')
}

module.exports = {
  db,
  fun
}

