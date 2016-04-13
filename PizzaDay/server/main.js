import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('employers', function(firstName, lastName) {
    return employers.find({'firstName': firstName, 'lastName': lastName});
  });

});
