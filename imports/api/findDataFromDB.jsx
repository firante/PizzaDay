import { Meteor } from 'meteor/meteor';

export function getAllUsers () {
  return Meteor.users.find({}, {'profile.name': 1}).fetch();
}
