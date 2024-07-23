const Blog = require('../model/blogModel');

exports.getIndex = (req, res) => {
    res.status(200).render('index', {
        title: 'Index Page'
    });
};

exports.getBlog = async (req, res) => {
    const blogs = await Blog.find();
    res.status(200).render('../views/pages/blog.pug', {
        title: 'Blog Page',
        blogs
    });
};

exports.getBlogContent = async (req, res) => {
    const blogs = await Blog.find();
    res.status(200).render('../views/pages/content/content.pug', {
        title: 'Blog Content Page',
        blogs
    });
};
