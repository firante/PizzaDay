
// general Pizza View
Template.pizzaDays.helpers({
  //---
  checkEmpl: function() {
    if(Meteor.users.find().fetch().length !== 0) {
      // select loged user
      var logedUser = Meteor.users.find().fetch()[0].profile.name;
      Meteor.subscribe('employers');
      // check if loged user are employer our of company
      if(employers.find({'employerName': logedUser}).fetch().length === 0) {
        return false;
      } else {
        return true;
      }
    }
  },

  // ---
  // meetings: function() {
  //   Meteor.subscribe('pizzaDay');
  //   return pizzaDay.find({'ovnerPizza' : Meteor.users.find().fetch()[0].profile.name}).fetch();
  // }

});

// ---
Template.pazzaDays.events({
  'click #createNewGroup': () => {
    groups.insert({'groupName': 'someGroup', 'groupMembers': []});
  }
});
