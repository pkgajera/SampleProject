import {
    UserRegister
} from "./register.html";

Template.UserRegister.onCreated(function() {

});

Template.UserRegister.onRendered(function() {
    $('#Registerform').parsley({
        trigger: 'blur'
    });

});

Template.UserRegister.helpers({

});

Template.UserRegister.events({
    "submit #Registerform" (e, t) {
        e.preventDefault();
        showLoadingMask();
        let value = {};
        value['name'] = $('[name="name"]').val();
        value['email'] = $('[name="email"]').val();
        value['password'] = $('[name="password"]').val();
        value['mobileno'] = $('[name="mobile"]').val();
        Meteor.call("uniqueEmailAndMobileCheck", value, function (error) {
          hideLoadingMask();
          if (error) {
            FlashMessages.sendError(error.message)
          } else {
            Meteor.call('createUserServer',value,function(error,result){
              if(error){
                FlashMessages.sendError(error.reason);
              }else{
                FlashMessages.sendSuccess('user registered successfully');
                Router.go('UserRegister');
              }
            })
          }
        });

    }
});
