import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitContact: function(){
      this.sendAction('action', this.get('model'));
    }
  }
});
