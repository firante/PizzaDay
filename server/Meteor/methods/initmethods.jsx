/*
* file for initialize method for manipulate data bases
* insert , update, remove
*/

import { groups } from '../../../imports/collections/collections.jsx';

Meteor.methods({
  // create new group
  addNewGroup : function(groupname, groupovner, groupmembers) {
    groups.insert({'groupname': groupname, 'groupovner': groupovner, 'groupmembers': groupmembers});
  },

  // edit existing group
  updateGroup : function (groupname, groupmembers, groupid) {
    groups.update(groupid, {$set: {'groupname': groupname, 'groupmembers': groupmembers}});
  }
});
