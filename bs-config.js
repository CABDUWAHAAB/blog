module.exports = {
    proxy: 'http://127.0.0.1:3000', 
    files: [
      'public/css/*.css',
      'public/js/*.js',
      "./views/*.pug",
      "./views/pages/*.pug",
      "./views/pages/components/*.pug",
      "./views/pages/content/*/pug",
      './scss/*.scss',
      './scss/abstract/*.scss',
      './scss/components/*.scss',
      './scss/pages/*.scss',
    ],
    notify: false,
    open: false,
    routes: {
      "/": "http://127.0.0.1:3000",
      "/blog": "http://127.0.0.1:3000/blog",
      "/blogContent": "http://127.0.0.1:3000/blogContent"
    }
  };
  