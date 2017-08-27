import {resetpassword} from "./resetpassword.html";

Template.resetpassword.onCreated(() => {

});

Template.resetpassword.onRendered(() => {
    $('#resetPasswordForm').parsley({
        trigger: 'blur'
    });
});

Template.resetpassword.helpers({

});

Template.resetpassword.events({
    'submit #resetPasswordForm'(e, t) {
        e.preventDefault();
        let password = $('[name="password"]').val();
        Accounts.resetPassword(Router.current().params.token, password, err => {
            if (err) {
                FlashMessages.sendError('We are sorry but something went wrong.');
            } else {
                FlashMessages.sendSuccess('Your password has been changed. Welcome back!');
            }
        });
        return false;
    },

});
