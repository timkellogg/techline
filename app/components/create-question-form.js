import Ember from 'ember';

export default Ember.Component.extend({
  categoryRecord: "",

  actions: {
    sendToInput(model) {
      var categoryName = model.get('name');
      this.set('categoryRecord', model);
      $("#category").val(categoryName);
    },
    saveQuestion() {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        notes: this.get('notes'),
        author: this.get('author'),
        time: new Date(),
        edited_at: false,
        category: this.categoryRecord, // need to insert a fallback method if no categories or else won't save (fails silently)
        votes: 0
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
