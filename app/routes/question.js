import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      params.question.save();
      this.transitionTo('question');
    },
    updateQuestion(model, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          model.set(key, params[key]);
        }
      });
      model.save();
      this.transitionTo('question', model.id);
    },
    deleteQuestion(model) {
      if(confirm('Are you sure you want to delete this question?')) {
        model.destroyRecord();
        this.transitionTo('index');
      }
    }
  }
});