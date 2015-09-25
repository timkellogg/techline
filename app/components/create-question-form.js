import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
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
        debugger;
      this.sendAction('saveQuestion', params);
    }
  }
});
