import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('category');
  },

  actions: {
    saveQuestion(params) {
      var _this_ = this;
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      params.category.save()
        .then(function() {
          Ember.get(_this_, 'flashMessages').success('Question was successfully created');
        })
        .catch(function() {
          Ember.get(_this_, 'flashMessages').danger('Question was not created');
        });
      this.transitionTo('index'); // later transition to show-question page
    }
  }
});
