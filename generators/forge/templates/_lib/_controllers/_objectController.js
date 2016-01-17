//CONTROLLERS

<%= name %>sController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('<%= lowerCase %>s');
  },
  data: function () {
  	return <%= name %>s.findOne({_id: this.params._id});
  },
  create: function() {
    this.render('create<%= name %>', {});
  },
  list: function(){
  	this.render('list<%= name %>', {});
  },
  edit: function(){
  	this.render('edit<%= name %>', {});
  }
});