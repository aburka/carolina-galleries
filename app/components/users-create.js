import Ember from 'ember';

export default Ember.Component.extend({
  isHidden: true,

  actions: {
    createUser: function(){
      this.sendAction('createUser', this.get('model'));
      this.set('isHidden', true);
    },
    show: function(){
      this.set('isHidden', false);
    },
    cancel: function(){
      this.set('isHidden', true);
    }
  }
});
