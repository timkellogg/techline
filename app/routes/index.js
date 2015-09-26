import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question')
      // add categories later
    });
  },

  actions: {
    searchQuestions(query) {
      var allQuestions = this.store.peekAll('question');
      var mapped = allQuestions.mapBy('content');
      var filteredQuestions = mapped.filter(function(question) {
        if (question.includes(query)) {
          return true;
        };
      });
    }
  }
});
