import Ember from 'ember';

export default Ember.Route.extend({
  return Ember.RSVP.hash({
    questions: this.store.findAll('question')
    // add categories later 
  });
});
