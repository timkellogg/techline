import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateQuestion(model, params) {
      debugger;
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          model.set(key, params[key]);
        }
      });
      model.save();
      this.transitionTo('question', model.id);
    },
  }
});
