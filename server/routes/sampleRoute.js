// Requires
const express = require('express');
const sample = express.Router();
// Controllers
const sampleController = require('../controllers').sampleController;

sample.get('/get-posts', sampleController.getPosts);
sample.post('/create-post', sampleController.createPost);
sample.delete('/delete-post', sampleController.deletePost);
sample.patch('/like-post', sampleController.likePost);
module.exports = sample