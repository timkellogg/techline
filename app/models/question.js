import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  notes: DS.attr(),
  author: DS.attr(),
  time: DS.attr(),
  answers: DS.hasMany('answer', { async: true }),
  edited_at: DS.attr(),
  category: DS.belongsTo('category', { async: true })
});
