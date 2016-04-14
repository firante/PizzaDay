
// ---
Template.pizzaDays.helpers({
  //---

  checkEmpl: function() {
    if(Meteor.users.find().fetch().length !== 0) {

      // ---
      var spl_users = Meteor.users.find().fetch()[0].profile.name.split(' ');
      Meteor.subscribe('employers', spl_users[0], spl_users[1]);

      // ---
      if(employers.find().fetch().length === 0) {
        return false;
      } else {
        return true;
      }
    }
  },

  // ---
  meetings: function() {
    Meteor.subscribe('pizzaDay');
    return pizzaDay.find({'ovnerPizza' : Meteor.users.find().fetch()[0].profile.name}).fetch();
  }

});
