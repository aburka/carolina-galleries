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
    delete: function(artwork){
      artwork.destroyRecord();
    },
    edit: function(artwork){
      artwork.save();
    },
    filepick: function(params){
      console.log(params);
      params.owner = this.get('session.currentUser');
      var upload = this.store.createRecord('image', params);
      upload.save();
    }
  }
});
