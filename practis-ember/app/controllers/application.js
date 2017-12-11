import Controller from '@ember/controller';
import Ember from 'ember';
/**
method1: how to import data from router.js to controller
通过 computing的方法
*/
// export default Controller.extend({
//   testData:'this is from application ',
//   copyData: Ember.computed('model',function(){
//     console.log(this.get('model')[0])
//     return this.get('model')[0].login;
//   })
// });


/**
method1: how to import data from router.js to controller
通过 controller.setProperties(mode); 不成公
*/

export default Controller.extend({
  testData:'this is from application ',
  copyData: Ember.computed.alias('model')
});
const t = { s: Ember.computed.alias('model') }

console.log(t.s);
