import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitContact: function(){
      this.sendAction('submitContact', this.getProperties('name', 'email', 'comments'));
      this.set('name');
      this.set('email');
      this.set('comments');
      this.set('isHidden', true);
    },
    openContact: function(){
      this.set('isHidden', false);
    },
    cancel: function(){
      this.set('isHidden', true);
    }
  },

  isHidden: true,

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
