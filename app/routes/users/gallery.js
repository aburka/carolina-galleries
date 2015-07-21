import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(){
    return this.store.findAll('image');
  },

  actions:{
    delete: function(artwork){
      artwork.destroyRecord();
    },

    edit: function(artwork){
      artwork.save();
    },

    filepick: function(blob){
      var username = this.get('session.currentUser.firstName');
      var upload = this.store.createRecord('image', {
        url : blob.url,
        filename : blob.filename
      });
      upload.save(blob);
    }
  }
});
