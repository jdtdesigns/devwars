/* global $ */

var app = (function() {
  var init = function() {
    topbar.setup();
    $('#sidebar').load('inc/sidebar.html', function() {
      sidebar.setup(); 
      $('#login-modal').load('inc/login-modal.html', function() { modal.setup(); });
    });
    resultsPanel.setup();
  };
  
  var sidebar = {
    page: $('#sidebar').attr('data-page'),
    setup: function() {
      var link = $('.sidebar').find('a[href="' + sidebar.page + '"]');
      
      link.addClass('active');
      
      $('.sidebar').find('a').on('click', sidebar.linkHandler);
    },
    linkHandler: function(e) {
      if ( $(this).hasClass('active') ) e.preventDefault();
    }
  };
  
  var modal = {
    login: true,
    setup: function() {
      $('#log').on('click', modal.show);
      
      // Hide modal when user clicks outside of the modal
      $('body').on('click', modal.hide);
      
      // Keep modal from closing when clicking inside
      $('.login').on('click', function(e) { e.stopPropagation(); });
      
      $('#register').on('click', modal.switchState);
    },
    show: function(e) {
      e.stopPropagation();
      $('.login, .overlay').removeClass('remove');
    },
    
    hide: function() {
      $('.login, .overlay').addClass('remove');
      $('#username, #email, #password, #password-confirm').val('');
    },
    switchState: function() {
      if (modal.login) { // Show Registration
        $('#login-title').addClass('hide');
        $('.create-text, #username, #password-confirm').removeClass('hide');
        $('#register').text('Login');
        $('#login-submit').text('Register');
        modal.login = false;
      }
      else { // Show Login
        $('#login-title').removeClass('hide');
        $('.create-text, #username, #password-confirm').addClass('hide');
        $('#register').text('Register New Account');
        $('#login-submit').text('Log In');
        modal.login = true;
      }
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
      
      $(this).addClass('active').siblings().removeClass('active');
      btn.text(type);
    }
  };
  
  var resultsPanel = {
    setup: function() {
      $('.results .tabs').find('li').on('click', resultsPanel.switchView);
      $('.results').find('.team-points').addClass('hide');
    },
    switchView: function() {
      var view = '.' + $(this).text().toLowerCase() + '-view',
          resultText = $('.results-display').find('.win-text, .lose-text'),
          teamPoints = $('.results-display').find('.team-points');
      

      if ( view == '.points-view' ) {
        teamPoints.removeClass('hide');
        $('.list').find(view).removeClass('hide').siblings().addClass('hide');
      } else {
        resultText.addClass('hide');
        teamPoints.addClass('hide');
        $('.list').find(view).removeClass('hide').siblings().addClass('hide');
      }
      
      if ( view == '.overall-view' ) resultText.removeClass('hide');

      $(this).addClass('active').siblings().removeClass('active');
    }
  };
  
  return {init: init};
})();

app.init();
