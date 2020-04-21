const paths = {
  src: "./src",
  dist: "./dist",

  nunjucks: {
    /* ['pages/index/index.html', 'pages/index/about.html'] - multiple entry points */
    src: ["pages/main/main.njk", "pages/product/product.njk", "pages/news-list/news-list.njk", "pages/news-page/news-page.njk"],
    dist: "",
  },

  stylesheets: {
    /* ['pages/index/index.scss', 'pages/index/about.scss'] - multiple entry points */
    src: "index.scss",
    dist: "assets/css",
  },

  javascripts: {
    /* ['pages/index/index.js', 'pages/index/about.js'] - multiple entry points */
    src: "index.js",
    dist: "assets/js",
  },

  images: {
    src: "images/**/*",
    dist: "assets/img",
  },

  fonts: {
    src: "fonts/**/*",
    dist: "assets/fonts",
  },
};

const ftps = {
  host: "host",
  user: "user",
  password: "password",
  folder: "folder",
};

module.exports = {
  paths,
  ftps,
};
