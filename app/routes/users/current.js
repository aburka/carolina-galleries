import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    unlike: function(artwork) {
      var adapter = this.store.adapterFor('application');
      adapter.ajax("https://api.parse.com/1/functions/unlike", 'POST', {
        data: {
          artwork: artwork
        }
      }).then(function(){
        this.get('session.currentUser.Artwork').removeObject(artwork);
      }.bind(this));
    }
  }
});
