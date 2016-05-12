import { Meteor } from 'meteor/meteor';
import { groups, pizzaDays } from '../collections/collections.jsx';

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

// method what get group menu items
export function getGroupMenu(groupId) {
  Meteor.subscribe('groups');
  return groups.findOne(groupId, {fields: {_id: 0, menuitems: 1}});
}

// method for get all pizza days
export function getAllPizzaDays() {
  Meteor.subscribe("pizzadays");
  return pizzaDays.find().fetch();

}
