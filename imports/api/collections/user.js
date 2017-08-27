//Declare Users collection
Schema = {};

Schema.UserProfile = new SimpleSchema({
    name: {
        type: String,
        optional: true
    },
    mobileNo: {
        type: String,
        optional: true
    },
    role: {
        type: String
    },
    isActive : {
      type: Boolean,
      autoValue: function() {
          if (this.isInsert) {
              return true
          }
      },
    },
});

export const Users = Meteor.users;

//Declared Schema of users
Schema.user = new SimpleSchema({
    emails: {
        type: [Object],
        optional: true
    },
    "emails.$.address": {
        type: String
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            }
        },
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    profile: {
        type: Schema.UserProfile,
        blackbox: true
    }
});

//Attached Schema with users collection
Users.attachSchema(Schema.user);
