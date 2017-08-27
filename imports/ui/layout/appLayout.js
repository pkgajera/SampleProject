import { appLayout }from './appLayout.html';


Template.appLayout.onCreated(function() {

});

Template.appLayout.onRendered(function() {
    // $(".scroll, .navbar li a, .footer li a").click(function(event) {
    //     $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    // });
});


Template.appLayout.helpers({
    footerText() {
        return currentYear = new Date().getFullYear();
    }
});

Template.appLayout.events({
'click .logout'(e,t){
  Meteor.logout();
  setTimeout(function(){
      Router.go('/login');
  })

}
});
