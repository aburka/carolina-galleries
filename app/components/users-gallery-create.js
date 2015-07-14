import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    uploadImage: function(){
      this.sendAction('uploadImage', this.getProperties('url', 'title'));
      this.set('url');
      this.set('title');
    }
  }
});
