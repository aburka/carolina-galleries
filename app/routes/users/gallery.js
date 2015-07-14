import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('image');
  },

  actions:{
    uploadImage: function(params){
      var image = this.store.createRecord('image', params);
      image.save();
    }
  }
});
