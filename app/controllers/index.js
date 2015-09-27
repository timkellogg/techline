import Ember from 'ember';

export default Ember.Controller.extend({
    sortProps: ['votes:desc', 'time:desc', 'answers:desc'], // first sort by votes, then by recent, then by answers
    sortedQuestions: Ember.computed.sort('model.questions', 'sortProps')
});
