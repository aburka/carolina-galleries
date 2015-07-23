import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitContact: function(){
      this.sendAction('action', this.getProperties('name', 'email', 'comments'));
      this.set('name');
      this.set('email');
      this.set('comments');
    }
  },

  isOpen: function(){
    var now = new Date();
    var weekDay = now.getDay();
    var hour = now.getUTCHours();
    var wed = 3;
    var sat = 6;
    if (weekDay >= wed && weekDay <= sat && hour > 12 && hour < 23){
      return true;
    }
  }.property()
});
