const {Sequelize, DataTypes}=require('sequelize');
const db=require('./db');

const Usuario = db.define('Usuario',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome:{
        type: DataTypes.STRING(100),
        unique: true,
    },

    email:{
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: true

    },
    senha:{
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    }

},{

});

module.exports=Usuario;