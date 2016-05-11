import { groups } from '../../../imports/collections/collections.jsx';

export function getUsersWithGroup(groupId) {
  let cursor = groups.find({_id: groupId}, {fields: {_id: 0, groupmembers: 1}});
  let usersWithGroup = [];
  cursor.forEach((value) => {
    value.groupmembers.forEach((value) => {
      usersWithGroup.push({
        name: value,
        confirmed: false,
        order: [],
        confirmedOrder: false
      });
    });
  });
  return usersWithGroup;
}
