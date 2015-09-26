import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    sendToInput(model) {
      var categoryName = model.get('name');
      console.log($("#category").val(categoryName));
    },
    saveQuestion() {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        notes: this.get('notes'),
        author: this.get('author'),
        time: new Date(),
        edited_at: false,
        category: this.get('category')
      };

      this.sendAction('saveQuestion', params);
    }
  }
});
