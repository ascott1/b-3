var Backbone = require('backbone');

var Place = Backbone.Model.extend({
  defaults: {
    name: 'New York'
  }
});

module.exports = Place;