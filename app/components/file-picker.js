import Ember from 'ember';

export default Ember.Component.extend({
  action:{
    filepick: function(){
      filepicker.pick(function(params){
        this.sendAction('filepick', params);
      }.bind(this));
    }
  }
});
