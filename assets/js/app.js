var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Place = require('./models/place');

console.log(new Place().get('name'));