import {
    UserLogin
} from "./login.html";

Template.UserLogin.onCreated(function(){

});

Template.UserLogin.onRendered(function(){
  $('#loginForm').parsley({
          trigger: 'blur'
      });
});

Template.UserLogin.helpers({

});

Template.UserLogin.events({
  "submit #loginForm"(e,t) {
          e.stopPropagation();
          e.preventDefault();
          loginUser($('[name=Email]').val(),$('[name=Password]').val());
      },
});
