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

        // this.get("session").open("firebase", { provider: provider}).then(function(data) {
        //   ref.child("users").child(data.uid).set({
        //     email: "tim.kellogg@gmail.com",
        //     username: data.currentUser.displayName,
        //     imageURL: data.currentUser.profileImageURL
        //   });
        // });
      },
      signOut: function() {
        this.get("session").close();
      }
    }
});
