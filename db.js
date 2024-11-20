const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  process.env.DATABASE_name, // Database name
  process.env.DATABASE_user, // User
  process.env.DATABASE_pwd, // Password on==, on va utiliser des variable d'environements
  {
    host: process.env.DATABASE_host, // Host
    dialect: 'postgres',
    port:5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
// j ai ajouté ca
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
// jsk ici
sequelize.sync()

module.exports = sequelize
