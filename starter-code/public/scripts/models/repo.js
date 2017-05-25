'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  //Done cOMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  /*
  1 This function does a request to GITHUB for all repos and passes that into repos.all and passes that into repoview.index. Which lives repoView.js. That function calls UI which empties the UL. It then appends all of the repos as LI under the UL.
  */
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
