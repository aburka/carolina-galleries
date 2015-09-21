import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',

  classNames: ['gallery'],

  isHidden: true,

  actions: {
    filepick: function(){
      filepicker.pick(function(blob){
        this.sendAction('filepick', blob);
      }.bind(this));
    },
    openChat: function(){
      this.set('isHidden', false);
    },
    closeChat: function(){
      this.set('isHidden', true);
    }
  }
});
