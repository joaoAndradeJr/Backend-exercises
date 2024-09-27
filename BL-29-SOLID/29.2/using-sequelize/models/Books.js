module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('Books', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  }, {
    timestamps: false,
    tableName: 'Books',
  });
  return Books;
};
