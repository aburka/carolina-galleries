import Ember from 'ember';

export default Ember.Component.extend({
  isAdmin: function(){
    return this.get('session.currentUser._data.isAdmin');
  }.property('isAdmin'),

  actions: {
    delete: function(){
      this.sendAction('delete', this.get('artwork'));
    }
  }
});
