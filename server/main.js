import { Meteor } from 'meteor/meteor';


import { groups, allUsers } from '../imports/collections/collections.jsx';
import './Meteor/methods/initmethods.jsx';

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.publish('groups', () => {
    return groups.find();
  });

  Meteor.publish('allUsers', () => {
    return Meteor.users.find({}, {'profile': 1});
  });
});
