import Ember from 'ember';

export default Ember.Controller.extend({
    sortProps: ['name:asc'], // first sort by votes, then by recent, then by answers
    sortedCategories: Ember.computed.sort('model.categories', 'sortProps')
});
