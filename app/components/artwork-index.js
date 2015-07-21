import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    like: function(artwork) {
      this.sendAction('like', artwork);
    },
    unlike: function(artwork){
      this.sendAction('unlike', artwork);
    }
  },
});
