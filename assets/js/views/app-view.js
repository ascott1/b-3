var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  el: '#main',
  template: _.template('Hello'),

  initialize: function(){
    this.render();
  },

  render: function(){
    $(this.el).html(this.template);
    return this;
  }
});