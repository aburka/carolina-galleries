import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    like: function(artwork) {
      this.sendAction('action', artwork);
    }
  }
});
