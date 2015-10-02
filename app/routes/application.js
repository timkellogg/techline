import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },

  actions: {
      signIn: function(provider) {
        var ref = new Firebase("https://techline.firebaseio.com/");

        this.get("session").open("firebase", { provider: provider}).then(function(data) {
          ref.child("users").child(data.uid).set({
            email: "tim.kellogg@gmail.com",
            username: data.currentUser.displayName,
            imageURL: data.currentUser.profileImageURL
          });
        });
      },
      signOut: function() {
        this.get("session").close();
      }
    }
});

// import DS from 'ember-data';
//
// export default DS.Model.extend({
//   email: DS.attr(),
//   username: DS.attr(),
//   picture: DS.attr(),
//   uid: DS.attr()
// });
//
//
// var currentUser = authData.google
// ref.child("users").child(authData.uid).set({
//   name: currentUser.displayName,
//   email: currentUser.email,
//   imageURL: currentUser.profileImageURL,
//   provider: authData.provider,
//   admin: false
// });
