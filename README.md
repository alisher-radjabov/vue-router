# vue-router

[![ks-vue-fullpage](https://img.shields.io/npm/v/ks-vue-fullpage.svg)](https://www.npmjs.com/package/ks-vue-fullpage) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Single page example

## Installation


npm install vue-router --save-dev

## Example

import router from 'vue-router';

// define a view for homepage:
// first define a footer element:
const footer = {
  el: '#footer',
  data () {
    return { year: 2015 };
  }
};
const home = {
  data () {
    return { siteName: 'Home' };
  },
  kids: [footer],
  // It works with `Webpack` and `Vue-loader`
  // which means you can write single-file Vue component and use it in Vue Simple Router.
  components: {
    clock: require('./components/clock.vue')
  }
};

// use a plugin, like vue-resource
router.use(VueResource);
// or
router.Vue.use(VueResource);

// map routes, support /user/* style minimatch
router.reg('/home*', {
  view: home
});
// or Regex
router.reg(/^\/home$/, {
  view: home
});

// initial router and bind it to body
router.init();
// or bind to anywhere
router.init('#app');
```

## License

MIT &copy; [Alisher](https://github.com/alisherradjabov).
