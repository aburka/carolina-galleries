import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    promptLike: function(){
      alert("You must log in to like this work of art!");
    },

    like: function(artwork) {
      this.sendAction('like', artwork);
    },
    unlike: function(artwork){
      this.sendAction('unlike', artwork);
    }
  },

});
