import {
    Meteor
} from 'meteor/meteor';

Meteor.startup(() => {
  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

});

import '../imports/ui/shared/accessDenied.html';
import '../imports/ui/shared/loading.html';
import '../imports/ui/shared/notFound.html';

import '../imports/ui/layout/appLayout.js';


import '../imports/ui/views/home/home.js';
import '../imports/ui/views/ragister/login.js';
import '../imports/ui/views/ragister/register.js';
