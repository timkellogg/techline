import Ember from 'ember';

export default Ember.Component.extend({
  
  actions: {
    saveCategory() {
      var params = {
        name: this.get('name')
      };
      if(params.name === undefined) {
        alert('Name must be filled out');
      } else {
        this.sendAction('saveCategory', params);
      }
    }
  }
});
