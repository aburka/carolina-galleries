import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',

  classNames: ['gallery'],

  actions: {
    filepick: function(){
      filepicker.pick(function(blob){
        this.sendAction('filepick', blob);
      }.bind(this));
    }
  }
});
