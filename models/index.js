const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

// const fun = () => {
//   console.log('FUN')
// }

const Page = db.define("page", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: ["^[a-z]+$", 'i'],
    }

  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: "Failed to provide content",
  },
  status: {
    type: Sequelize.ENUM("open", "closed"), //the only possible values can be what we specified - in this case, open and closed
  },
})

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: ["^[a-z]+$", 'i'],
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    }

  }
})

module.exports = {
  db,
}


