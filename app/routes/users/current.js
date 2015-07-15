import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(){
    return Ember.$.ajax({
      url: 'https://api.artsy.net/api/artworks?gene_id=4dd689edb084a900010015c6',
      type: 'GET',
      dataType: 'json',
      contentType: "application/json",
      headers: {
        'X-Xapp-Token': "JvTPWe4WsQO-xqX6Bts49nNq_yb04yJEZ-XTnaQhTOb0wwNLJnpQOFek7FPtmQ1qWNo3U0dyRdAWsXWQMLB8PL-f7TX5pajZfIEHjJ5ddvoObRiLuDTPCne2LdqzesvNTT5pbmXsrcSTe9o5pcR5yvMYiXchQJkatty9JVT2x5Zy9qmcxw_Y7BafmJdUu2LY2eyf0GGwbWaFth0fgk4doD_QaVGE1czcsRrovIKtqZ4="
      },

      success: function(data){
          console.log("success:artwork", data);
      }
      });
    },
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
