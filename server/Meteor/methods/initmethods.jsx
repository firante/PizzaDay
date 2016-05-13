/*
* file for initialize method for manipulate data bases
* insert , update, remove
*/

import { groups, pizzaDays } from '../../../imports/collections/collections.jsx';
import { getUsersWithGroup, getCountItem} from '../api/serverApi.jsx';

Meteor.methods({
  // create new group
  addNewGroup : function(groupname, groupovner, groupmembers) {
    groups.insert({'groupname': groupname, 'groupovner': groupovner, 'groupmembers': groupmembers, 'menuitems': []});
  },

  // edit existing group
  updateGroup : function (groupname, groupmembers, groupid) {
    groups.update(groupid, {$set: {'groupname': groupname, 'groupmembers': groupmembers}});
  },

  // method for remove group
  removeGroup: function(id) {
    groups.remove({_id: id});
  },

  //method for add menu item to menu list
  addMenuItem: function (id, menuitemObj) {
    groups.update(id, {$addToSet: {'menuitems' : menuitemObj}});
  },

  // method for modify menu item
  modifyMenuItem: function (id, menuitemObj, oldItem) {
    groups.update({_id: id, 'menuitems': oldItem}, {$set: {'menuitems.$' : menuitemObj}});
  },

  // method for remove menu item
  removeMenuItem: function(id, remObj) {
    groups.update(id, {$pull: {'menuitems': remObj}});
  },

  //event for create new PizzaDays
  createPizzaDay: function(groupId, date, owner) {
    pizzaDays.insert(
      {
        'date': date,
        'status': 'ordering',
        'groupID': groupId,
        'owner': owner,
        'users': getUsersWithGroup(groupId)
      }
    );
  },

  //method for confirmed user participate
  confirmedParticipate: function(pizzaDayId, userName) {
    pizzaDays.update(
      { _id: pizzaDayId, 'users.name': userName },
      { $set: { 'users.$.confirmed': true } }
    );
  },

  //method for remove user from participate
  removeFromParticipate: function(pizzaDayId, userName) {
    pizzaDays.update (pizzaDayId,
      { $pull: { users: {name: userName } } },
      {multi: true}
    );
  },

  // push new item to user menu list
  pushUserOrder: function(pizzaDayId, userName, name, price, count) {
    pizzaDays.update(
      {_id: pizzaDayId, 'users.name': userName},
      {$push: {'users.$.order' : {name: name, count: count, price: price } } }
    );
  }

});
