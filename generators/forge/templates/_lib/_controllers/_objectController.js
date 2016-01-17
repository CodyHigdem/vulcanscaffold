//CONTROLLERS

<%= name %>sController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('<%= lowerCase %>s');
  },
  data: function () {
  },
  create: function() {
    this.render('create<%= name %>', {});
  },
  list: function(){
  	this.render('list<%= name %>', {});
  }
});