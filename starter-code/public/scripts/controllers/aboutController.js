'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // Done cOMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (put your response in a comment here)
  /*
  1 This is showing the section with ID about and hiding the section with ID aticles.
  2 Then it call the function app.repos.requestRepos which lives on repos.js. That function does a request to GITHUB for all repos and passes that into repos.all and passes that into repoview.index. Which lives repoView.js. That function calls UI which empties the UL. It then appends all of the repos as LI under the UL.
  */
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
