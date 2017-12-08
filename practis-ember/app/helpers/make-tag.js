export default Ember.Helper.helper(function(params) {
  return Ember.String.htmlSafe(`<b>${params[0]}</b>`);
});
