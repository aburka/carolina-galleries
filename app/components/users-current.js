import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',

  classNames: ['artwork'],

  actions: {
    unlike: function(artwork) {
      this.sendAction('action', artwork);
    }
  }
});
