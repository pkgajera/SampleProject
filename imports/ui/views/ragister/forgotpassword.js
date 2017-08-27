import {
    forgotpassword
} from "./forgotpassword.html";

Template.forgotpassword.onCreated(function(){

});

Template.forgotpassword.onRendered(function(){
$('#forgotPasswordForm').parsley({ trigger: 'blur' });
});

Template.forgotpassword.helpers({

});

Template.forgotpassword.events({
"submit #forgotPasswordForm"(e,t){
  e.preventDefault();
  showLoadingMask();
  let emailId = $('[name="email"]').val();
  Accounts.forgotPassword({email: emailId}, err => {
        if (err) {
          if (err.message === 'User not found [403]') {
            //console.log('This email does not exist.');
              FlashMessages.sendError('This email does not exist.');
              hideLoadingMask();
          } else {

            //console.log('We are sorry but something went wrong.');
            FlashMessages.sendError('We are sorry but something went wrong.');
            hideLoadingMask();
          }
        } else {
          //console.log('Email Sent. Check your mailbox.');
          FlashMessages.sendSuccess('Email Sent. Check your mailbox.');
          hideLoadingMask();
        }
      });
}
});
