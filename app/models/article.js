/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;
    User = require('../models/user');


/**
 * Article Schema
 */
var ArticleSchema = new Schema({
    id: {
        type: Number
    },
    title: {
        type: String,
        default: '',
        trim: true
    },
   content: {
       type: String
   }
});


mongoose.model('Article', ArticleSchema);