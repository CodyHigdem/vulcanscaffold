//Posts for Blog
Posts = new Mongo.Collection('posts');

if (Meteor.isServer) {
  Posts.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}

Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 244
  },
  body: {
    type: String,
    label: "Body"
  },
  publishDate: {
    type: Date,
    autoform: {
      type: 'hidden',
      label: false
    },
  },
  createdAt: {
    type: Date,
      autoform: {
        type: 'hidden',
        label: false
      },
      autoValue: function(){
        return new Date();
      }
    },
  tags: {
    type: String,
    label: "Body Style",
    allowedValues: ['Convertibles', 'Coupes', 'Hatchbacks', 'Vans', 'Sedans', 'Suvs', 'Trucks', 'Wagons'],
    optional: true
  },
}));