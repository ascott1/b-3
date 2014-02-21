var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require("./templates/main.hbs");
Backbone.$ = $;

module.exports = Backbone.View.extend({
  el: '#main',

  initialize: function(){
    this.render();
  },

  render: function(){
    $(this.el).html(template);
    return this;
  }
});