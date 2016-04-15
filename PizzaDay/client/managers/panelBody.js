Template.panelBody.helpers({
  employers: (id) => {
    console.log(id)
    Meteor.subscribe('pizzaDay');
    return pizzaDay.find().fetch();
  },

  currUserCheck: (userFirst, userLast) => {
    if(userFirst + ' ' + userLast === Meteor.users.find().fetch()[0].profile.name) {
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
