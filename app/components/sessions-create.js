import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Component.extend(LoginControllerMixin,{
  authenticator: 'authenticator:parse-username',
  isHidden: true,

  tagName: 'span',

  classNames:['user-login-create'],

  actions: {
    show: function(){
      this.set('isHidden', false);
    },
    cancel: function(){
      this.set('isHidden', true);
    }
  }
});
