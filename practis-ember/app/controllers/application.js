import Controller from '@ember/controller';
import Ember from 'ember';
//method1: how to import data from router.js to controller
export default Controller.extend({
  testData:'this is from application ',
  copyData: Ember.computed('model',function(){
    console.log(this.get('model')[0])
    return this.get('model')[0].login;
  })

});
