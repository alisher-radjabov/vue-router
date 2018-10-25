System.config({
  map: {
  }
});
var home = {
  data: {
    user: {}
  },
  ready: function () {
    $.getJSON('https://api.github.com/users/alisherradjabov').then(function (data) {
      this.user = data;
    }.bind(this));
  }
};

var sox = {
  el: '#sox',
  data: {
    name: 'sox'
  }
};

var viewVar = {
  data: {
    repos: []
  },
  ready: function () {
    $.getJSON('https://api.github.com/users/alisherradjabov/repos').then(function (data) {
      this.repos = data;
    }.bind(this));
  },
  kids: [sox]
};

System.import('../../dist/vsr.js')
  .then(function (router) {
    return router.default;
  })
  .then(function (router) {
    router.reg(/^\/examples\/github-users\/$/, {
      view: home
    })
    router.reg(/^\/examples\/github-users\/([\w])+\.html/, {
      view: viewVar
    })
    router.init('body');
  });
