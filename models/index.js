const {Sequelize} = require('sequelize');
const dbBooking = {};

const sequelize = new Sequelize(
  process.env.DB_DBNAME,
  process.env.DB_AUTH,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      useUTC: false,
      dateStrings: true,
      typeCast: true,
    },
    timezone: "+05:30",
  }
);


dbBooking.Company = require("./companydetails.model")(sequelize)

// dbBooking.Users.hasOne(dbBooking.Session, { foreignKey: "userId" })

Object.keys(dbBooking).forEach(modelName => {
    if (dbBooking[modelName].dbBooking) {
        dbBooking[modelName].associate(dbBooking);
    }
});

dbBooking.sequelize = sequelize;
dbBooking.Sequelize = Sequelize;

module.exports = dbBooking;
