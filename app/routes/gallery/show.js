import Ember from 'ember';

export default Ember.Route.extend({
  model: function(artwork){
    return this.store.findAll('image', artwork.id);
  },
});
