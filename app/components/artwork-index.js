import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    promptLike: function(){
      alert("You must log in to like this work of art!");
    },

    like: function(artwork) {
      this.sendAction('action', artwork);
    }
  }
});
