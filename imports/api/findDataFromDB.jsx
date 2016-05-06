import { Meteor } from 'meteor/meteor';
import { groups } from '../collections/collections.jsx';

// method what get all registered users
export function getAllUsers () {
  Meteor.subscribe('allUsers');
  return Meteor.users.find().fetch();
}

// methos what get all created groups
export function getAllGroups() {
  Meteor.subscribe('groups');
  return groups.find().fetch();
}
