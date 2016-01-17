//===== yeoman hook =====//
//The above line is required for our yeoman generator and should not be changed.

Meteor.publish('<%= lowerCase %>s', function (/* args */) {
  return <%= name %>s.find();
});