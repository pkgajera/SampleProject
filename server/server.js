import { Meteor } from 'meteor/meteor';
import {
    Users
} from '../imports/api/collections/user';

Meteor.startup(() => {
  process.env["MAIL_URL"] = "smtp://kathiriyabm9111210@gmail.com:9shjnnd11@smtp.gmail.com:587/";

  // if (Meteor.settings && Meteor.settings.env && _.isObject(Meteor.settings.env)) {
  //     for (const variableName in Meteor.settings.env) {
  //         process.env[variableName] = Meteor.settings.env[variableName];
  //     }
  // }

});

import '../imports/api/methods/method';

import '../imports/api/publishers/publisher';
