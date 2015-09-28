import Ember from 'ember';

export default Ember.Controller.extend({
  searchQuestions: "",

  actions: {
    query: '',
    searchQuestions: Ember.on('init', function()  {
      var query = this.get('query');
      var searchQuestions = this.get('model').filter(function(item) {
        return item.get('title').indexOf(query) !== -1;
      });
      this.set('searchQuestions', searchQuestions);
    })
  }
});
