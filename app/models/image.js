import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('string'),
  filename: DS.attr('string'),
  username: DS.attr('string'),
  name: DS.attr('string')
});
