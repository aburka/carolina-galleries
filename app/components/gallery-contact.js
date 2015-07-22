import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitContact: function(){
      this.sendAction('action', this.get('model'));
    }
  },
  // 
  // isOpen: false,
  //
  // open: function(){
  //   var now = new Date();
  //   var weekDay = now.getDay();
  //   var hour = now.getHours();
  //   if (weekDay > 3 && weekDay  < 6 && hour > 8 && hour < 19){
  //     return true;
  //   }
  //   this.set('isOpen', true);
  // }.property('open')
});
