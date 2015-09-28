import Ember from 'ember';

export default Ember.Component.extend({
  answerForm: false,

  actions: {
    showAnswerForm() {
      this.set("answerForm", true);
    },
    hideAnswerForm() {
      this.set("answerForm", false);
    },
    saveAnswer(params) {
      var params = {
        question: this.get('model'),
        author: this.get('author'),
        content: this.get('content'),
        time: new Date(),
        votes: 0
      };
      this.set("answerForm", false);
      this.sendAction("saveAnswer", params);
    }
  }
});
