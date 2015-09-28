import Ember from 'ember';

export default Ember.Controller.extend({
  sortProps: ["votes:desc"],
  sortedAnswers: Ember.computed.sort('model.answers', 'sortProps')
});
