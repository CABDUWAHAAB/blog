const mongoose = require('mongoose');
const slugify = require('slugify');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    slug: {
        type: String
    },
    image: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
// je gaat title als slug gebruiken
blogSchema.pre('save', function(next) {
    this.slug = slugify(this.title, { lower: true });
    next();
  });

module.exports = mongoose.model('Blog', blogSchema);
