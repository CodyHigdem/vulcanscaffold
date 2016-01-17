'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var htmlWiring = require('html-wiring');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the wonderful ' + chalk.red('generator-vulcan') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'What is the name of your schema?'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function () {
    var name = this.props.name;
    var lowerCase = this.props.name.toLowerCase();


    this.fs.copyTpl(
      this.templatePath('dummyfile.html'),
      this.destinationPath('dummyfile.html'), {
        name: this.props.name
      }
    );

    this.fs.copyTpl(
      this.templatePath('_lib/_collections/_collections.js'),
      this.destinationPath('lib/collections/'+this.props.name+'s.js'), {
        name: this.props.name,
        lowerCase: this.props.name.toLowerCase()
      }
    );

  //MAKE THE INSERT FORM
  this.fs.copyTpl(
    this.templatePath('_client/_views/_object/_create/_createObject.html'),
    this.destinationPath('client/views/'+lowerCase+'s/create/create'+this.props.name+'.html'),
    {
      name: this.props.name,
      lowerCase: this.props.name.toLowerCase()
    }
  );    
  this.fs.copyTpl(
    this.templatePath('_client/_views/_object/_create/_createObject.css'),
    this.destinationPath('client/views/'+lowerCase+'s/create/create'+this.props.name+'.css'),
    {
      name: this.props.name,
      lowerCase: this.props.name.toLowerCase()
    }
  );  
  this.fs.copyTpl(
    this.templatePath('_client/_views/_object/_create/_createObject.js'),
    this.destinationPath('client/views/'+lowerCase+'s/create/create'+this.props.name+'.js'),
    {
      name: this.props.name,
      lowerCase: this.props.name.toLowerCase()
    }
  );  
//CREATE CONTROLLER
  this.fs.copyTpl(
    this.templatePath('_lib/_controllers/_objectController.js'),
    this.destinationPath('lib/controllers/'+lowerCase+'sController.js'),
    {
      name: this.props.name,
      lowerCase: this.props.name.toLowerCase()
    }
  );  
//CREATE LIST INFO
  this.fs.copyTpl(
    this.templatePath('_client/_views/_object/_listObject.html'),
    this.destinationPath('client/views/'+name+'/list'+name+'.html'),
    {
      name: this.props.name,
      lowerCase: this.props.name.toLowerCase()
    }
  );  
//CREATE listObject helper
  this.fs.copyTpl(
    this.templatePath('_client/_views/_object/_listObject.html'),
    this.destinationPath('client/views/'+lowerCase+'/list'+name+'.html'),
    {
      name: this.props.name,
      lowerCase: this.props.name.toLowerCase()
    }
  );  

    //END WRITING 
  },
  updatePublish: function () {
    var lowerCase = this.props.name.toLowerCase();
    var name = this.props.name;
    var routeText = [
      "Meteor.publish('"+lowerCase+"',function () {",
      " return "+name+"s.find();",
      "});",
      "//===== yeoman hook =====//"
     ];
    var indexFile = require('html-wiring').readFileAsString('server/publish.js');
    console.log(indexFile);
    indexFile = indexFile.replace('//===== yeoman hook =====//',routeText.join('\n'));
    this.write('server/publish.js',indexFile);
},
updateRoutes: function(){
    var lowerCase = this.props.name.toLowerCase();
    var name = this.props.name;
    var routeText = [
      "Router.route('/"+name+"s/create', {",
      " name: 'create"+name+"',",
      " controller: '"+name+"sController',",
      " action: 'create',",
      " where: 'client'",
      "});",
      "",
      "Router.route('/"+name+"s', {",
      " name: 'list"+name+"s',",
      " controller: '"+name+"sController',",
      " action: 'list',",
      " where: 'client'",
      "});",
      "",
      "//===== yeoman hook =====//"
     ];
    var indexFile = require('html-wiring').readFileAsString('lib/routes.js');
    console.log(indexFile);
    indexFile = indexFile.replace('//===== yeoman hook =====//',routeText.join('\n'));
    this.write('lib/routes.js',indexFile);

}
});
