import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category')
    });
  },

  actions: {
    saveCategory(params) {
      var _this_ = this;
      var newCategory = this.store.createRecord('category', params);
      newCategory.save()
        .then(function() {
          Ember.get(_this_, 'flashMessages').success('Category was successfully created');
        })
        .catch(function() {
          Ember.get(_this_, 'flashMessages').success('Category was not created');
        })
      this.transitionTo('browse-categories');
    }
  }
});
