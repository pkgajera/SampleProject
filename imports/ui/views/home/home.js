import { home }from './home.html';

Template.home.onCreated(function() {

});

Template.home.onRendered(function() {

if(!Meteor.userId())
{
Router.go('/login')
}
   
});


Template.home.helpers({
   
});

Template.home.events({
 
});
