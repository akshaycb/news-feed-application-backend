const posts = (sequelize, DataTypes) => {
    const Posts = sequelize.define('posts', {
        data: DataTypes.TEXT,
        likes: DataTypes.BIGINT,
    })
    return Posts
}

module.exports = posts