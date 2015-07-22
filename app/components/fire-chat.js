import Ember from 'ember';

export default Ember.Component.extend({
  initChat: function(){
    this.fireRef.authWithCustomToken(this.get('user.firebaseToken'), function(error, authData){
      var chat = new FirechatUI(this.fireRef, this.$()[0]);
      chat.setUser(authData.uid, this.get('user.username'));
    }.bind(this));
  }.on('didInsertElement')
});
