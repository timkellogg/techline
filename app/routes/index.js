import Ember from 'ember';

export default Ember.Route.extend({

  results: [],

  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question')
    });
  },

  // actions: {
  //   searchQuestions(query) {
  //     var allQuestions = this.store.peekAll('question');
  //     var mapped = allQuestions.mapBy('title');
  //     var filteredQuestions = mapped.filter(function(question) {
  //       if (question.includes(query)) {
  //         return true;
  //       };
  //     });
  //     this.get('results');
  //     this.results.push(filteredQuestions);
  //     console.log(filteredQuestions);
  //     $("#search-results").text(filteredQuestions);
  //   }
  // }
  actions: {
    searchQuestions(query) {
      console.log(query);
      return model.questions = this.store.findAll('question').then(function(questions) {
        return questions.filterBy('content', query);
      })
    }
  }
});

// model() {
//   return this.store.findAll('question').then(function(questions) {
//     return questions.filterBy("title", "")
//   })
// }
