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
    //comatibility
    mkdirp.sync('/client/compatibility');
    //VIEWS
    this.fs.copy(
      this.templatePath('_client/_views/_includes/_footer.html'),
      this.destinationPath('client/views/includes/footer.html')
    );
    this.fs.copy(
      this.templatePath('_client/_views/_includes/_nav.html'),
      this.destinationPath('client/views/includes/nav.html')
    );
    //STATIC
    this.fs.copy(
      this.templatePath('_client/_views/_static/_about.html'),
      this.destinationPath('client/views/static/about.html')
    );

    
    /////Routes
    this.fs.copy(
      this.templatePath('_lib/_routes.js'),
      this.destinationPath('lib/routes.js'));

    this.fs.copy(
      this.templatePath('_lib/_collections/_posts.js'),
      this.destinationPath('lib/collections/posts.js'));

    this.fs.copy(
      this.templatePath('_server/_accounts.js'),
      this.destinationPath('server/accounts.js'));
    //Server file
    this.fs.copy(
      this.templatePath('_server/_publish.js'),
      this.destinationPath('server/publish.js'));


    //client folder
    this.fs.copy(
      this.templatePath('_client/_compatibility'),
      this.templatePath('_clients/_views/_main.html')
      );
  }

},
yup: function(){
  console.log('all done *********************')
}

});