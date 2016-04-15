import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('employers', function() {
    return employers.find();
  });

  Meteor.publish('allEmployers', function() {
    return employers.find();
  });

  Meteor.publish('pizzaDay', function() {
    return pizzaDay.find();
  });

});
