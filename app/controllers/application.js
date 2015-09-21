import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
      openModal: function(target) {
          var modal = this.get('comp-' + target);
          modal.send('toggleModal');
      },
    }
});
