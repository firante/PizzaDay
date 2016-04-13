import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';




console.log(Meteor.userId());
alert(Meteor.userId());


Template.het.helpers({
  val: function() {
    return "sss";
  }
});
