const sequelize = require('../db/config');
const { DataTypes } = require('sequelize')



const Post = sequelize.define('post', {
    caption : {
        type : DataTypes.STRING,
    },
    location : {
        type : DataTypes.STRING,
        set(value) {
            this.setDataValue('location', value.toLowerCase())
        }
    },
    likes : {
        type : DataTypes.INTEGER,
        defaultValue : 0,
        validate : {
            isInt: {
                args : [true],
                msg : 'likes must be integer value!'
            },
            min: {
                args : [0],
                msg : 'likes must be non-negative value!'
            }, 
        }
    }
});


module.exports = Post;