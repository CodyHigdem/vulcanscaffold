//COLLECTIONS
//<%= name %>



<%= name %>s = new Mongo.Collection('<%= lowerCase %>s');

if (Meteor.isServer) {
  <%= name %>s.allow({
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

<%= name %>s.attachSchema(new SimpleSchema({
  brand: {
    type: String,
    label: "Brand",
    max: 100
  },
  model: {
    type: String,
    label: "Model",
    max: 100
  },
  fueltype: {
    type: String,
    label: "Fuel Type",
    allowedValues: ['Petrol', 'Diesel', 'Hybrid', 'Electric'],
  },
  bodystyle: {
    type: String,
    label: "Body Style",
    allowedValues: ['Convertibles', 'Coupes', 'Hatchbacks', 'Vans', 'Sedans', 'Suvs', 'Trucks', 'Wagons'],
    optional: true
  },
  topspeed: {
    type: Number,
    label: "Top Speed (mph)",
    optional: true
  },
  power: {
    type: Number,
    label: "Power (HP)",
    optional: true
  },
  contactAgain: {
    type: Boolean,
    label: 'Can contact again?'
  },
  value: {
    type: String,
    label: "Value Status",
    allowedValues: ['Green', 'Red', 'Black'],
    optional: true
  },
  createdAt: {
    type: Date,
    autoform:{
      type: 'hidden',
      label: false
    },
    autoValue: function(){
      return new Date();
    }
  },
  uid: {
    type: String,
    autoform:{
      type: 'hidden',
      label: false
    },
    autoValue: function(){
      return this.userId;
    },
    optional: true
  },
}));