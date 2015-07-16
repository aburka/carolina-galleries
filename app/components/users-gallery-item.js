import Ember from 'ember';

export default Ember.Component.extend({
  isHidden: true,

  isAdmin: function(){
    return this.get('session.currentUser._data.isAdmin');
  }.property('isAdmin'),

  actions: {
    delete: function(){
      this.sendAction('delete', this.get('artwork'));
    },
    showEdit: function(){
      this.set('isHidden', false);
    },
    edit: function(){
      this.sendAction('edit', this.get('artwork'));
      this.set('isHidden', true);
    },
    cancel: function(){
      this.set('isHidden', true);
    }
  }
});
