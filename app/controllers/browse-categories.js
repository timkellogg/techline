import Ember from 'ember';

export default Ember.Controller.extend({
    sortProps: ['name:asc'],
    sortedCategories: Ember.computed.sort('model.categories', 'sortProps')
});
