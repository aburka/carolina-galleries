import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    unlike: function(artwork) {
      this.sendAction('action', artwork);
    }
  }
});
