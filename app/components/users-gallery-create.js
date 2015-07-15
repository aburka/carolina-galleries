import Ember from 'ember';

export default Ember.Component.extend({
  isHidden: true,

  username: function(){
    return this.get('session.currentUser.username');
  }.property('username'),

  name: function(){
    var firstName = this.get('session.currentUser.firstName');
    var lastName = this.get('session.currentUser.lastName');
    return firstName + " " + lastName;
  }.property('name'),

  actions: {
    uploadImage: function(){
      this.sendAction('uploadImage', this.getProperties('url', 'title', 'user', 'name'));
      this.set('url');
      this.set('title');
      this.set('username');
      this.set('name');
    },
    show: function(){
      this.set('isHidden', false);
    },
    cancel: function(){
      this.set('isHidden', true);
    }
  }
});
