import Ember from 'ember';

export default Ember.Component.extend({
    //gt thumbnail url use regular expression to remove anything after slash, add large
    imageUrl: function(){
      var curies = this.get('this.attrs.model.value._links.curies');
      var url = curies.objectAt(0).href;
      return url.replace('{rel}', 'large.jpg');
    }.property('imageUrl')
  });
