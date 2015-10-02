import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },

  actions: {
      signIn: function(provider) {
        var ref = new Firebase("https://techline.firebaseio.com/");
        ref.onAuth(authDataCallback);
        function authDataCallback(authData) {
          if (authData) location.reload();
        }
        ref.authWithOAuthPopup("google", function(error, authData) {
          var currentUser = authData.google
          ref.child("users").child(authData.uid).set({
            email: currentUser.email,
            username: currentUser.displayName,
            imageURL: currentUser.profileImageURL
          });
        },
        {
          remember: "sessionOnly",
          scope: "email"
        });
      },
      signOut: function() {
        this.get("session").close();
        this.transitionTo('index');
      }
    }
});
