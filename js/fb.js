/*global $ */

var Firebase = (function() {
  var init = function() {
    modal.setup();
  };

  var modal = {
    login: true,
    setup: function() {
      $('#log').on('click', modal.show);
      
      // Hide modal when user clicks outside of the modal
      $('body').on('click', modal.hide);
      
      // Keep modal from closing when clicking inside
      $('.login').on('click', function(e) {e.stopPropagation();});
      
      $('#register').on('click', modal.switchState);
    },
    show: function(e) {
      e.stopPropagation();
      $('.login, .overlay').removeClass('hide');
    },
    hide: function() {
      $('.login, .overlay').addClass('hide');
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

  return {init: init};
})();

Firebase.init();