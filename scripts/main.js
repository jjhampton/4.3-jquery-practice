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

    $('.directory').each(function(index) {
      $(this).after(JST['subdirectories']({
        directory: menu[index],
      }));
    });

    $(".directory").on("click", function(event) {
      console.log(event.target);
      $(event.target).nextUntil(".directory").slideToggle( "slow", function() {
      });
    });
  }






})();
