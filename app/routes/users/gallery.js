import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(){
    return this.store.findAll('image');
  },

  actions:{
    uploadImage: function(params){
      var image = this.store.createRecord('image', params);
      image.save();
    },
  }
});
