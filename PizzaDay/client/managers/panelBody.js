Template.panelBody.helpers({
  employers: (id) => {
    Meteor.subscribe('pizzaDay');
    var emp = pizzaDay.find({_id: id}).fetch();
    return emp[0].allEmploy;
  },

  currUserCheck: (user) => {
    if(user === Meteor.users.find().fetch()[0].profile.name) {
      return true
    } else {
      return false;
    }
  }
});


Template.panelBody.events({
  'click #successUser': (e, template) => {
    var employ = template.find('#userName').innerText;
    var idPizzaDay = template.find('#employersList').getAttribute('value');
    Meteor.subscribe('pizzaDay');
    pizzaDay.update(
      {_id: idPizzaDay},
      {$push: {'successEmpl': employ}}
    );
  },

  'click #declineUser': (e, template) => {
    var employ = template.find('#userName').innerText;
    var idPizzaDay = template.find('#employersList').getAttribute('value');
    Meteor.subscribe('pizzaDay');
    pizzaDay.update(
      {_id: idPizzaDay},
      {$pull: {allEmploy: [employ]}}
    );
  }
});
