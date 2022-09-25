const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create our User model
class User extends Model { }

//define table columns and configuration
User.init({
    //define an id column
    id: {
        //use the special Sequilize DataTypes object provide what type of data it is
        type: DataTypes.INTEGER,
        //this is equivalent of SQL's 'NOT NULL' option
        allowNull: false,
        //instruct that this is the Primary Key
        primaryKey: true,
        //turn on auto increment
        autoIncrement: true
    },
    //define a username column
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //define an email column
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        //there cannot be any duplicate email values in this table
        unique: true,
        validate: {
            isEmail: true
        }
    },
    //define a password olumn
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            //password must be at least four characters long
            len: [4]
        }
    }
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;