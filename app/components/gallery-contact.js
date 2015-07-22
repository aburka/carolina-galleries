import Ember from 'ember';

export default Ember.Component.extend({
  // isOpen: false,

  actions: {
    submitContact: function(){
      this.sendAction('action', this.get('model'));
    }
  },

  open: function(){
    //get current time
    var now = new Date();
    //get day of week
    var weekDay = now.getDay();
    // get current hour
    var hour = now.getHours();

    if(weekDay > 3 && weekDay < 6 && hour > 11 && hour < 19){
      this.set('isOpen', true);
    } else {
      this.set('isOpen', false);
    }
  }
});
