
Accounts.urls.resetPassword = (token) => {
    return Meteor.absoluteUrl('reset-password/' + token);
};

Accounts.urls.verifyEmail = (token) => {
    return Meteor.absoluteUrl('verify-email/' + token);
};

Accounts.validateLoginAttempt(function (loginAttempt) {
    if (!loginAttempt.allowed) {
          throw new Meteor.Error(901,loginAttempt.error.reason);
    } else {

        // In some cases this method isn't invoked with a correct user object...
        if (!loginAttempt.user) {
            throw new Meteor.Error(903, informationMessages.notValidUser);
        }

        // If email verification is required check if the user has a valid email address and don't allow the login if he has none

            if (!loginAttempt.user.emails[0].verified) {
                throw new Meteor.Error(902, informationMessages.emailVerifiedFirst);
            }

            if (!loginAttempt.user.profile.isActive) {
                throw new Meteor.Error(904,"you are blocked by admin");
            }


        // We have a correct login!
        return true;
    }
});


Accounts.config({
  forbidClientAccountCreation : true
});


