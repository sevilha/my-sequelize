const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
}, {
  // Adicionei algumas opções para o modelo
  timestamps: true, // Adiciona createdAt e updatedAt
  tableName: 'users', // Nome da tabela no banco de dados
  hooks: {
    beforeCreate: (user) => { // Hook para transformar o email em minúsculas antes de criar o usuário
      user.email = user.email.toLowerCase();
    },
  },
});

module.exports = User;
