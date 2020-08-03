'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class teste extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  teste.init({
    descricao: DataTypes.STRING,
    cargaHoraria: DataTypes.STRING,
    dataInicio: DataTypes.DATE,
    dataConclusao: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'teste',
  });
  return teste;
};