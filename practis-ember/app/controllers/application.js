import Controller from '@ember/controller';
import Ember from 'ember';
//method1: how to import data from router.js to controller
export default Controller.extend({
  testData: 'this is from application ',
  isShowingBody: true,
  copyData: Ember.computed('model', function() {
    return this.get('model')[0].login;
  }),
  actions: {
    toggleBody() {
      this.toggleProperty('isShowingBody');
    }
  }
});
