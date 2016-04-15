Template.panelBody.helpers({
  employers: (id) => {
    Meteor.subscribe('pizzaDay');
    var emp = pizzaDay.find({_id: id}).fetch();
    Session.set('_id', id);
    return emp[0].allEmploy;
  },

  currUserCheck: (user) => {
    Meteor.subscribe('pizzaDay');
    var empList = pizzaDay.find({_id: Session.get('_id')}).fetch()[0].successEmpl; // list of employer that will present to the pizzaday

    if(user === Meteor.users.find().fetch()[0].profile.name && empList.indexOf(user) === -1) {
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
    console.log(idPizzaDay);
    pizzaDay.update(
      {_id: idPizzaDay},
      {$pull: {allEmploy: {$in: [employ]}}}
    );
  }
});
