const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define(
        "Company",
        {
            id            : {type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true},
           
            companyName     : {type: DataTypes.STRING(100), allowNull: true, },
            companyRegNo      : {type: DataTypes.STRING(100), allowNull: true, },
            address  : {type: DataTypes.STRING(350), allowNull: false, unique: true},
            vatRegNo  : {type: DataTypes.STRING(100), allowNull: false, unique: true},
            managingDirector      : {type: DataTypes.STRING(100), allowNull: true, },
            country       : {type: DataTypes.STRING(100), allowNull: true, },
            phone         : {type: DataTypes.STRING(100), allowNull: true, },
            fax          : {type: DataTypes.STRING(100), allowNull: true, },
            mobilePhone       : {type: DataTypes.STRING(100), allowNull: true, },

            emailAddress       : {type: DataTypes.STRING(100), allowNull: true, },
            internetAddress       : {type: DataTypes.STRING(300), allowNull: true, },
           
        },
        {
            sequelize,
            timestamps: true,
            paranoid: true,
            tableName: "company"
        }
    );
};
