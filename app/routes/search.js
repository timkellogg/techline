import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  }
});

//
// import Ember from 'ember';
//
//     export default Ember.Route.extend({
//       lastThreadsPage: false,
//       limit: 25,
//       offset: 0,
//
//       model: function(){
//         var self = this;
//         return Ember.RSVP.hash({
//           threads: this.store.find('thread', {
//             limit: self.get('limit'),
//             offset: self.get('offset')
//           }),
//           groups: this.store.findAll('group')
//         });
//       },
//
//       actions: {
//         loadMoreThreads: function() {
//           var self = this;
//           var params = {
//             limit: this.get('limit'),
//             offset: this.get('offset')+this.get('limit')
//           };
//
//           this.set('offset', this.get('offset') + this.get('limit'));
//
//           this.store.find('thread', params).then(function(threads) {
//             if(threads.content.length===0){
//               self.set('lastThreadsPage', true);
//             }
//             self.currentModel.threads.addObjects(threads);
//           });
//         }
//       }
//     });
