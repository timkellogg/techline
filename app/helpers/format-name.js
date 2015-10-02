import Ember from 'ember';

export function formatName(params) {
  var firstLast = params[0].displayName.split(" ");
  return  "Welcome " + firstLast[0] + "!";
}

export default Ember.Helper.helper(formatName);
