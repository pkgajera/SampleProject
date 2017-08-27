import {
    Users
} from '/imports/api/collections/user';

Meteor.methods({
   
    createUserServer(values, cb) {
        var options = {
            email: values.email,
            password: values.password,
            profile: {
                name: values.name,
                mobileNo: values.mobileno,
                role: 'user'
            },
        };
        let resultForReg = Accounts.createUser(options);
        Accounts.sendVerificationEmail(resultForReg);

        return resultForReg;
    },
    uniqueEmailAndMobileCheck(values){
      let foundUSerByMobileno = Users.findOne({
          'profile.mobileNo': values.mobileno
      });
      if (foundUSerByMobileno) {
          throw new Meteor.Error('200', 'Mobile no already used');
          return false;
      }
      let foundUSerByEmail = Users.findOne({
          'emails.0.address': values.email
      });
      if (foundUSerByEmail) {
          throw new Meteor.Error('200', 'email already used');
          return false;
      }
    }
});
