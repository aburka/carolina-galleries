import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return Ember.$.ajax({
      url: 'https://api.artsy.net/api/artworks?gene_id=4d90d18edcdd5f44a5000013&size=50',
      type: 'GET',
      dataType: 'json',
      contentType: "application/json",
      headers: {
        'X-Xapp-Token': "JvTPWe4WsQO-xqX6Bts49pVqXlee2Shc4lnzLjBI7ExeeIFLnGjN5QnM2lzTKVZHZ-Iz94IlpS1Fblg2GmQreqniLseOnht3DI2jqZ-hWftG8t5OOIkq3xJpfSMOKqr8QkjJGSklCLRfAni7Rkws35bHjFcrWudCOxnzAho7fUer_DqEiBlMDwJP-xKODwubFtvpZPQyRhHOwFh_99GtYhAwcCK2CBlwmD4CD-08np8="
      },

      success: function(data){
          console.log("success:sculpture", data);
      }
      });
    },

    actions: {
      like: function(artwork) {
        var adapter = this.store.adapterFor('application');
        adapter.ajax("https://api.parse.com/1/functions/like", 'POST', {
          data: {
            artwork: artwork
          }
        }).then(function(response){
          console.log(response);
        });
      },
      unlike: function(artwork) {
        var adapter = this.store.adapterFor('application');
        adapter.ajax("https://api.parse.com/1/functions/unlike", 'POST', {
          data: {
            artwork: artwork
          }
        }).then(function(response){
          console.log(response);
        });
      }
    }
});
