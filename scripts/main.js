(function(){
  'use strict';

  $(document).ready(function() {
    $.getJSON('http://localhost:9000/menu.json').then(app);
  });

  function app(menu) {
    console.log(menu);
    renderApp(menu);

  }

  function renderApp(menu) {

    //Handlebars helper what will total up the number of individual items from a directory's subdirectories for use in displaying on the parent directory line on the top-level display
    Handlebars.registerHelper("getCountTotal", function(directory) {
      var countTotal = 0; //initial sum value
      _.each(directory.subdirectories, function(subdirectory){
        countTotal += subdirectory.count;
      });
      return countTotal;
    });

    //Handlebars helper to increment value by 1
    Handlebars.registerHelper("incrementer", function(value) {
      return parseInt(value) + 1;
    });

    $('body').prepend(JST['application']());
    $('.container').prepend(JST['directories']({
      menu: menu
    }));

    _.each(menu, renderDirectory);

    _.each(menu, function(directory) {
      console.log(directory);
    });
  }



  function renderDirectory(directory) {
    $('.directory').after(JST['subdirectory']({
      directory: directory
    }));
  }


})();
