const {sequelize, Sequelize, DataTypes, Model} = require('./sequelize_index');

/**
 * Represents a Menu
 */
class Rating extends Model {

    // add methods here

}

Rating.init({
    title: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    description: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false
});

module.exports = {
    Rating
};