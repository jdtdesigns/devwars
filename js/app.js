/* global $ */

var app = (function() {
  var init = function() {
    sidebar.setup();
  };
  
  var sidebar = {
    setup: function() {
      $('.sidebar').find('a').on('click', sidebar.linkHandler);
    },
    linkHandler: function(e) {
      if ( $(this).hasClass('active') ) e.preventDefault();
    }
  };
  
  return {init: init};
})();

app.init();
