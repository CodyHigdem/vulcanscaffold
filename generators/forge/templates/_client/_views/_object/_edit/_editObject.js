Template.edit<%= name %>.helpers({
  beforeRemove: function () {
    return function (collection, id) {
      var doc = collection.findOne(id);
      if (confirm('Really delete <%= name %>: "' + doc.brand + " " + doc.model + '"?')) {
      this.remove();
      Router.go('<%= name %>sList');
    }
  };
 }
});