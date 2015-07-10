import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.get('session.currentUser');
  },

  actions: {
    submitContact: function(){
      console.log(this.get('model'));
    }
  }
});
