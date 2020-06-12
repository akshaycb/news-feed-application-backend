const models = require('../models');
const {v1} = require('uuid')

// models.sequelize.sync().then(()=>{})

module.exports = {
    getPosts: function(req, res){
        try{
            models.posts.findAll().then((posts)=>{
                res.send(posts)
            })
        }catch(error){
            res.send({ error: error.message })
        }
    },
    createPost: function(req, res){
        try{
            const post = models.posts.build({
                id: v1(),
                data: req.body.data,
                likes: 0,
            })
            post.save().then((newTask)=>{
                res.send(newTask)
            })        
        } catch(error){
            res.send({ error: error.message })
        }
    },
    deletePost: function(req, res){
        try{
            models.posts.findOne({ where: { id: req.body.id } })
            .then((post)=>{
                if (post){
                    post.destroy({
                        where: { id: req.body.id }
                    }).then((deletedPost)=>{
                        if(deletedPost){
                            res.send('Post Deleted')
                        }
                    })
                }
            })
            models.posts.destroy({ where: { id: req.body.id } }).then(()=>{
                res.send('success')
            })
        }catch(error){
            res.send({ error: error.message })
        }
    },
    likePost: function(req, res){
        try{
            if(req.body && req.body.id){
                models.posts.findOne({ where: { id: req.body.id } })
                .then((post) => {
                    if (post){
                        post.update({
                            likes: parseInt(post.likes)+1
                        }).then((updatedPost)=>{
                            if(updatedPost){
                                res.send('like incremented')
                            }
                        })
                    }
                })
            }
        }catch(error){
            res.send({ error: error.message })
        }
    }
};