/*
* file for initialize method for manipulate data bases
* insert , update, remove
*/

import { groups } from '../../../imports/collections/collections.jsx';

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
  }
});
