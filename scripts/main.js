(function(){
  'use strict';

  $.getJSON('http://localhost:9000/menu.json').then(logMenu);

  function logMenu(menu) {
    console.log(menu);
  }

  $(document).ready(function(){
    $('body').prepend(JST['application']());
  });
})();
