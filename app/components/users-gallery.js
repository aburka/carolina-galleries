import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete: function(artwork){
      this.sendAction('delete', artwork);
    }
  }
});
