import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    upVoteAnswer(answer) {
      var answer = this.store.find('answer', answer.id).then(function(record) {
        record.incrementProperty("votes");
        record.save();
      });
    },
    downVoteAnswer(answer) {
      var answer = this.store.find('answer', answer.id).then(function(record) {
        record.decrementProperty("votes");
        record.save();
      });
    },
    saveAnswer(params) {
      var _this_ = this;
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      params.question.save()
        .then(function() {
          Ember.get(_this_, 'flashMessages').success('Answer was successfully created');
        })
        .catch(function() {
          Ember.get(_this_, 'flashMessages').danger('Answer was not created');
        });
      this.transitionTo('question');
    },
    updateQuestion(model, params) {
      var _this_ = this;
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          model.set(key, params[key]);
        }
      });
      model.save()
        .then(function() {
          Ember.get(_this_, 'flashMessages').success('Answer was successfully edited');
        })
        .catch(function() {
          Ember.get(_this_, 'flashMessages').danger('Edit was unsuccessful');
        });
      this.transitionTo('question', model.id);
    },
    deleteQuestion(model) {
      if(confirm('Are you sure you want to delete this question?')) {
        var answer_deletions = model.get('answers').map(function(answer) {
          return answer.destroyRecord();
        });
        Ember.RSVP.all(answer_deletions).then(function() {
          return model.destroyRecord();
        });
        Ember.get(this, 'flashMessages').success('Answer was successfully deleted');
        this.transitionTo('index');
      }
    },
    deleteAnswer(answer) {
      var _this_ = this;
      if(confirm('Are you sure you want to delete this answer?')) {
        answer.destroyRecord()
          .then(function() {
            Ember.get(_this_, 'flashMessages').success('Answer was successfully deleted');
          })
          .catch(function() {
            Ember.get(_this_, 'flashMessages').danger('Edit was unsuccessful');
          });
      }
    }
  }
});
