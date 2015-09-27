import Ember from 'ember';

export default Ember.Controller.extend({
    sortProps: ['votes:desc'],
    sortedQuestions: Ember.computed.sort('model.questions', 'sortProps')
});
