'use strict';
//Require dependencies
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
//Configurations will be loaded here.
//Ask for user input
prompting: function() {
  var done = this.async();
  this.prompt({
    type: 'input',
    name: 'name',
    message: 'Your project name',
    //Defaults to the project's folder name if the input is skipped
    default: this.appname
  }, function(answers) {
    this.props = answers
    this.log(answers.name);
    done();
  }.bind(this));
},
//Writing Logic here
writing: {
  //copy the configuration files
  //copy application files
  app: function(){

    //.meteor file
    this.fs.copy(
      this.templatePath('.meteor/.finished-upgraders'),
      this.destinationPath('.meteor/.finished-upgraders')
    );
    this.fs.copy(
      this.templatePath('.meteor/.gitignore'),
      this.destinationPath('.meteor/.gitignore')
    );
    this.fs.copy(
      this.templatePath('.meteor/.id'),
      this.destinationPath('.meteor/.id')
    );
    this.fs.copy(
      this.templatePath('.meteor/packages'),
      this.destinationPath('.meteor/packages')
    );
    this.fs.copy(
      this.templatePath('.meteor/platforms'),
      this.destinationPath('.meteor/platforms')
    );
    this.fs.copy(
      this.templatePath('.meteor/release'),
      this.destinationPath('.meteor/release')
    );
    this.fs.copy(
      this.templatePath('.meteor/versions'),
      this.destinationPath('.meteor/verions')
    );
    //CLIENT //COMPATIBILITY
    mkdirp.sync('/client/compatibility');
    //VIEWS //INCLUDES
    this.fs.copy(
      this.templatePath('_client/_views/_includes/_accessDenied.html'),
      this.destinationPath('client/views/includes/accessDenied.html')
    ); 
    this.fs.copy(
      this.templatePath('_client/_views/_includes/_footer.html'),
      this.destinationPath('client/views/includes/footer.html')
    );
    this.fs.copy(
      this.templatePath('_client/_views/_includes/_navbar.html'),
      this.destinationPath('client/views/includes/navbar.html')
    );
    this.fs.copy(
      this.templatePath('_client/_views/_includes/_notFound.html'),
      this.destinationPath('client/views/includes/notFound.html')
    );
    //CLIENT //VIEWS //STATIC FILES
    this.fs.copy(
      this.templatePath('_client/_views/_static/_about.html'),
      this.destinationPath('client/views/static/about.html')
    );
    this.fs.copy(
      this.templatePath('_client/_views/_static/_home.html'),
      this.destinationPath('client/views/static/home.html')
    );
    this.fs.copy(
      this.templatePath('_client/_views/_static/_landingPage.html'),
      this.destinationPath('client/views/static/landingPage.html')
    );
    this.fs.copy(
      this.templatePath('_client/_views/_static/_login.html'),
      this.destinationPath('client/views/static/login.html')
    );
    this.fs.copy(
      this.templatePath('_client/_views/_static/_privacyPolicy.html'),
      this.destinationPath('client/views/static/privacyPolicy.html')
    );
    this.fs.copy(
      this.templatePath('_client/_views/_static/_register.html'),
      this.destinationPath('client/views/static/register.html')
    );        
    this.fs.copy(
      this.templatePath('_client/_views/_static/_tos.html'),
      this.destinationPath('client/views/static/tos.html')
    );
    //CLIENT //VIEWS //LAYOUTS
    this.fs.copy(
      this.templatePath('_client/_views/_layouts/_masterLayout.html'),
      this.destinationPath('client/views/layouts/masterLayout.html')
    ); 
    //CLIENT 
    this.fs.copy(
      this.templatePath('_client/_main.html'),
      this.destinationPath('client/main.html')
    );
    this.fs.copy(
      this.templatePath('_client/_main.js'),
      this.destinationPath('client/main.js')
    );  
    //LIB //COLLECTIONS
    this.fs.copy(
      this.templatePath('_lib/_collections/_posts.js'),
      this.destinationPath('lib/collections/posts.js')); 
    //LIB //CONTROLLERS

    //LIB //METHODS
    this.fs.copy(
      this.templatePath('_lib/_methods.js'),
      this.destinationPath('lib/methods.js'));   
    //LIB ///ROUTES
    this.fs.copy(
      this.templatePath('_lib/_routes.js'),
      this.destinationPath('lib/routes.js'));
    //PUBLIC
    mkdirp.sync('public/fonts');
    mkdirp.sync('public/img');
    mkdirp.sync('public/js');
    //PRIVATE
    mkdirp.sync('private');
    //SERVER
    this.fs.copy(
      this.templatePath('_server/_accounts.js'),
      this.destinationPath('server/accounts.js'));
    //Server file
    this.fs.copy(
      this.templatePath('_server/_publish.js'),
      this.destinationPath('server/publish.js'));
    this.fs.copy(
      this.templatePath('_server/_methods.js'),
      this.destinationPath('server/publish.js'));


  }

},
yup: function(){
  console.log('all done *********************')
}

});