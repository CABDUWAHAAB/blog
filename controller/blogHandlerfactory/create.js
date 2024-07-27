const catchAsync = require("../../utils/catchAsync"); 

exports.createBlog = Model =>
    catchAsync(async (req, res, next) => {
        const { title, author, description, image } = req.body;
        const blog = new Model({ title, author, description, image });
        await blog.save();

        if (req.headers.accept.includes('text/html')) {
            // Redirect to home page after successful creation
            return res.redirect('/blogContent');
        }

        res.status(201).json({
            status: 'success',
            data: {
                blog
            }
        });
});
