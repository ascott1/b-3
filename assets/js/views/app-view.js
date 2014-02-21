var Backbone = require('backbone');
var $ = require('jquery');
var headerTemplate = require('templates/title.html');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  el: $('body'),

  initialize: function(){
    this.render();
  },

  render: function(){
    $(this.el).prepend(headerTemplate);
  }
});