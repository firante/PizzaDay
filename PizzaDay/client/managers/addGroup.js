Template.addGroup.helpers({
  employers: () => {
    console.log(employers.find().fetch());
    return employers.find().fetch();
  }
});

Template.addGroup.events({
  'click li': (e, template) {
    Meteor.subscribe('groups');
    
  }
});
