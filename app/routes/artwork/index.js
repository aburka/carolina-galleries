import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return Ember.$.ajax({
      url: 'https://api.artsy.net/api/artworks?size=50',
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
      like: function(artwork) {
        var adapter = this.store.adapterFor('application');
        //var artwork = this.attrs.model.value._embedded.artworks;
        adapter.ajax("https://api.parse.com/1/functions/like", 'POST', {
          data: {
            artwork: artwork
          }
        }).then(function(response){
          console.log(response);
        });
        /*return Ember.$.ajax("https://api.parse.com/1/users/" + this.get('session.currentUser.id'), {
          type: "PUT",
          data: JSON.stringify({
            likes: {
              __op: "AddUnique",
              objects: [
                {
                  __type: 'Pointer',
                  className: 'Artwork',
                  objectId: artwork.id
                }
              ]
            }
          })
        });*/
      }
    }
});
