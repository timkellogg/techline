import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,

  actions: {
    showUpdateForm() {
      this.set("updateForm", true);
    },
    hideUpdateForm() {
      this.set("updateForm", false);
    },
    updateQuestion(model) {
      debugger;
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        notes: this.get('notes'),
        author: this.get('author'),
        date: undefined
      };
      this.sendAction('updateQuestion', model, params);
      this.set("updateForm", false);
    }
  }
});
