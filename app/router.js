import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('design', { path: '/Design' });
  this.route('data', { path: '/Data' });
  this.route('settings', { path: '/Settings' });
  this.route('contact', { path: '/Contact' });
});

export default Router;
