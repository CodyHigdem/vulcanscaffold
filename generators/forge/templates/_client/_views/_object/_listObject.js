Template.list<%= name %>s.helpers({
  <%= lowerCase %>s: function() {
    return <%= name %>s.find();
  }
});