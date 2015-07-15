import Ember from 'ember';

export default Ember.Component.extend({
  isLiked: false,

  actions: {
    like: function(artwork) {
      this.sendAction('like', artwork);
      this.set('isLiked', true);
    },
    unlike: function(artwork){
      this.sendAction('unlike', artwork);
      this.set('isLiked', false);
    }
  },

  isLiked: function(){
    //var artworkArr = user._data.Artwork;
    var liked = this.get('session.currentUser.Artwork').filter(function(art){
      return this.get('artwork.id') === art.id;
    }.bind(this));
    return liked.length > 0;
  }.property('session.currentUser.Artwork')

});
