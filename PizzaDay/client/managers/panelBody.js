Template.panelBody.helpers({
  employers: () => {
    Meteor.subscribe('allEmployers');
    return employers.find().fetch();
  }
});
