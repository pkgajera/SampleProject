import {
    userprofile
} from './userprofile.html';

import {
    Users
} from '/imports/api/collections/user';

Template.userprofile.onCreated(function(){

});

Template.userprofile.onRendered(function(){

});

Template.userprofile.helpers({
  userDetail(){
    return Users.findOne({_id:Meteor.userId()})
  }

});

Template.userprofile.events({
"submit #profileForm"(e,t){
  e.preventDefault();
  showLoadingMask();
  debugger;
  Meteor.call('updateUserProfile',  $('[name="name"]').val(), function (error, result) {
    hideLoadingMask();
    if (error) {
      alertify.error(error.reason);
    } else {
        alertify.success("Profile Updated Successfully");
    }
  });
}
});
