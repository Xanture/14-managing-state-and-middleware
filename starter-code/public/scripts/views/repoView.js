'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  // Done cOMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  /*
  1 This function calls UI (above on line 7) which empties the UL. It then creates a new array of all of the repos using the mothod defined on repo.js line 15 to filter by attribute, in this case the attribute name. with a name proporty and appends those as LI under the UL.
  2 This is called in aboutController.index in aboutController.js
  */
  repoView.index = function() {
    ui();

    $('#about ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
