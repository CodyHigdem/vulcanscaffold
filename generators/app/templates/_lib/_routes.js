//ROUTES


//===== yeoman hook =====//

/**
* MASTER LAYOUT
**/
Router.configure({
  layoutTemplate: 'MasterLayout',
  notFoundTemplate: 'notFound',
});
/**
* Static Routes
**/
Router.route('/tos', {name: 'tos'});
Router.route('/hello', {name: 'landingPage'});
Router.route('/about', {name: 'about'});
Router.route('/privacyPolicy', {name: 'privacyPolicy'});
Router.route('/login', {name: 'login'});
Router.route('/register', {name: 'register'});
Router.route('/logout', function(){
  var self = this;
  Meteor.logout(function(err){
      if(err){
        console.log('Error Logging out: '+ err);
      }

    Router.go('/');
  });
});
Router.route('/admin', {
	name: 'admin'
});
Router.route('/', {name: 'home'});
