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
        'X-Xapp-Token': "JvTPWe4WsQO-xqX6Bts49ijmR_KEI0T62dtoOGQiNeTqbi7W5EbiSyH6A_gXh_NlF2ME2IFxOQ22OBPuxLKBKWSFmMyGq_AWtN7prEmzILl6mrBc333kurt2TJAP9DA4F29C_uJ2yetHw1bEDQPdfiRhuDKAI5AnYxnXneI4EcohSADbj5Oayu7uSzh8nqy_0StlZhc2usXU56dJPx_y_0XJc6qajxoi8JEE0tFfkiE="
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
      }).then(window.location.reload());
    }
  }
});
