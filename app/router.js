import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sessions', function() {
    this.route('create');
  });
  this.route('artists', function() {
    this.route('show', {path: ':id'});
  });
  this.route('artwork', function() {
    this.route('show', {path: 'art/:id'});
  });
  this.route('contact');

  this.route('users', function() {
    this.route('current', {path: 'me'});
    this.route('create');
  });
});

export default Router;
