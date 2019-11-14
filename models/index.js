const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const fun = () => {
  console.log('FUN')
}

const Page = db.define("page", {
  title: {
    type: Sequelize.STRING,
  },
  slug: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.TEXT,
  },
  status: {
    type: Sequelize.ENUM("open", "closed"), //the only possible values can be what we specified - in this case, open and closed
  },
})

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  }
})

module.exports = {
  db,
  
}


