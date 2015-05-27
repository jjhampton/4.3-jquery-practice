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
    $('body').prepend(JST['application']());
    $('.container').prepend(JST['directories']({
      menu: menu
    }));
  }

  function getCountTotal(directory) {
    var countTotal = 0; //initial sum value
    _.each(directory.subdirectory, function(){
      countTotal += subdirectory.count;
    });
  }


})();
