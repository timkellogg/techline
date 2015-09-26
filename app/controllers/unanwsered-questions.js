import Ember from 'ember';

export default Ember.Controller.extend({
  filteredModels: Ember.computed('model.[]', function() {
    return this.get('model').filter( (question) => {
      return question.get('answers.length') === 0;
    })
  })
});
