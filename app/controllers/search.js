import Ember from 'ember';

export default Ember.Controller.extend({
  searchQuestions: "",

  actions: {
    searchQuestions: Ember.on('init', function()  { // on init, track these properties
      var query = this.get('query');
      var searchQuestions = this.get('model').filter(function(item) {
        return item.get('content').toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
      this.set('searchQuestions', searchQuestions);
    })
  }
});
