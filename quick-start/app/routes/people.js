import Route from '@ember/routing/route';
import Ember from 'ember';
import EmberObject from '@ember/object';
import Component from '@ember/component';

export default Ember.Route.extend({
  model(){
    return [
      {name: 'liss', email:'abc@fss.com'},
      {name: 'ccc', email:'sasa@fss.com'},
      {name: 'sss', email:'ccssw@fss.com'}
    ]
  }
});

/*
* 如果你用的是 create的情况下，Component 必须里面有一个rendered的method
* 特可以是 空的，也可以是 有function的
*/
const people = Component.extend({
  init(){
    this._super(...arguments);
    console.log('init');
  },
  name: 'ancs',
  classNameBindings: ['isUrgent'],
  isUrgent: true,
  renderer:{}
});

people.reopenClass({
  type:'plice'
})

//生成实例
const night = people.create();

console.log(night.name);
console.log(night.type);

// console.log(night.name);
