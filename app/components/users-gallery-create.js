import Ember from 'ember';

export default Ember.Component.extend({
  model: function(){
    this.store.createRecord('image');
  },
  actions: {
    uploadImage: function(){
      this.sendAction('uploadImage', this.get('model'));
    }
  }
});
