import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new-question');
  this.route('question', { path: '/question/:question_id' });
  this.route('category', { path: '/category/:category_id' });
  this.route('browse-categories');
  this.route('unanwsered-questions');
  this.route('about');
  this.route('contact');
  this.route('search');
  this.route('user', { path: '/user/:user_id' });
  this.route('users');
});

export default Router;
