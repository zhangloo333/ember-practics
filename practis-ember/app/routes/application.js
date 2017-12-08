import Ember from 'ember';
import EmberRouter from '@ember/routing/router'; // 这个不能用
export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model() {
    let self = this;
    return this.get('ajax').request('//api.github.com/users');
    // return new Ember.RSVP.Promise((resolve,reject)=>{
    //   setTimeout(function(){reject(
    //     {message:'error happen'}
    //   )}, 2000);
    // })
  }
});
