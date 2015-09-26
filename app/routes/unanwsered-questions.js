import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('question').then(function(questions) {
      return questions.filterBy("title", "Title")
    })
  }
});
