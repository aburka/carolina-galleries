import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('image');
  },

  actions:{
    uploadImage: function(image){
      image.save();
      this.transitionTo('users.gallery.index');
    }
  }
});
