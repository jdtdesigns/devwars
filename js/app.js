/* global $ */

var app = (function() {
  var init = function() {
    sidebar.setup();
    topbar.setup();
  };
  
  var sidebar = {
    setup: function() {
      $('.sidebar').find('a').on('click', sidebar.linkHandler);
    },
    linkHandler: function(e) {
      if ( $(this).hasClass('active') ) e.preventDefault();
    }
  };
  
  var topbar = {
    setup: function() {
      $('.top-bar').find('.current').on('click', topbar.showNav);
      $('.top-bar ul').find('li').on('click', topbar.setType);
      $('body, #log').on('click', topbar.closeNav);
    },
    showNav: function(e) {
      e.stopPropagation();
      $('.top-bar').find('ul').toggleClass('show');
      $('.top-bar').find('.arrow').toggleClass('up');
    },
    closeNav: function() {
      $('.top-bar').find('ul').removeClass('show');
      $('.top-bar').find('.arrow').removeClass('up');
    },
    setType: function() {
      var type = $(this).text(), btn = $('.top-bar').find('.current-text');
      btn.text(type);
    }
  };
  
  return {init: init};
})();

app.init();
