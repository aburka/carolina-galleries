import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  classNames:['user-login-create'],

  actions: {
    createUser: function(){
      this.sendAction('createUser', this.get('model'));
    },
  }
});
