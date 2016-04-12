Template.loging.events({
  'click [data-social-login]' (event, template) {
    options = {
      requestPermissions: ['email']
    };

    alert(options.requestPermissions);
  }
});
