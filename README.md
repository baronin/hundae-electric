# hundae-electric

### pages
* [index](https://hundae-electric.netlify.app)
* [product](https://hundae-electric.netlify.app/product.html)
* [news-list](https://hundae-electric.netlify.app/news-list.html)
* [news-page](https://hundae-electric.netlify.app/news-page.html)
* [about-company](https://hundae-electric.netlify.app/about-company.html)
* [contacts](https://hundae-electric.netlify.app/contacts.html)

## Gulp boilerplate
> All you need for static website coding. Includes live reload, SASS,  autoprefixer, EJS/PUG template engines, images reducing, JS/SASS linters, FTP deployment, JS bundling with browserify, ES2015+ ready, JS/CSS minification.*

* __npm install__
* __gulp__(gulp dev || npm run dev) - run dev environment
* __gulp build__ - build project, same as _gulp dev_ but without running dev server
* __gulp deploy__ - deploy project to ftp server
* __--prod__ - use this flag to minify css / js, reduce images size and other differences for production, ex. _gulp build --prod_, _gulp deploy --prod_
* __gulp sasslint__ - scsslint, [rules](.scss-lint.yml)
* __gulp eslint__ - eslint, [rules](.eslintrc). You can use __--fix__ flag to [automatically fix problems](https://eslint.org/docs/rules/).

* __format__ - prettier, [prettier](https://prettier.io/docs/en/install.html)

[Config file](gulpfile.babel.js/config/index.js) - ftp credentials and paths to files.

### Proposed technologies / approaches

#### HTML
* [NUNJUCKS](https://mozilla.github.io/nunjucks/templating.html) template engine. Optional: [EJS](https://ejs.co/#docs) or [PUG](https://pugjs.org/api/getting-started.html).
* [BEM](https://en.bem.info/methodology/html/)

#### CSS
* Choose between __reset.css__ and __normalize.css__
* [SCSS](https://sass-lang.com/)
* [BEM](https://en.bem.info/methodology/css/)
* Properties order:
  * Layout: The position of the element in space. Eg.: position, top, z-index.
  * Box: The element itself. Eg.: display, overflow, box-sizing.
  * Visual: Design of the element. Eg.: color, border, background.
  * Type: Typesetting of the element. Eg.: font-family, text-transform.

Code Sample:
```
  .button {
    position: relative;
    z-index: 2;
    display: inline-block;
    margin: 0 12px;
    padding: 12px 24px;
    background: #3f55aa;
    border-radius: 5px;
    border: 1px solid tomato;
    color: tomato;
    transition: background-color .3s ease-out;
    font-size: 14px;
    line-height: 19px;
    text-transform: uppercase;
  }
```

#### JavaScript
* ES6
* [Browserify](http://browserify.org/) (CommonJS modules)

#### File structure
```
  /* Global code, heplers, utils, etc. */
  common/
    njk/
    scss/
    js/

  /* Reusable components */
  components/
    Component/
      Component.njk
      Component.scss
      Component.js

  /* Pages */
  pages/
    page/
      page.njk
      page.scss
      page.js
```

#### Linters
* [SCSS-Lint](https://github.com/brigade/scss-lint)
* [ESLint](https://github.com/eslint/eslint)

#### Plugins
* [jquery-mask-plugin](http://igorescobar.github.io/jQuery-Mask-Plugin/docs.html)
* [jqueryvalidation](https://jqueryvalidation.org/documentation/)
* [slick-carousel](https://kenwheeler.github.io/slick/)
