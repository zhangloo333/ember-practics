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

/**
 * below is computing perporty
 */

const NewPerson = EmberObject.extend({
  fName: null,
  lName: null,
  // fullname: function() {
  //   return this.fName + '' + this.lName;
  // }
  fullName: Ember.computed('fName', 'lName',function(){
      return  `${this.get('fName')} ${this.get('lName')}`
  })
});

const newNight = NewPerson.create({
  fName: 'Albert',
  lName: 'Yu',
  // renderer: {}
})

console.log(newNight.get('fullName'));
console.log(newNight.set('fName','nighttire'));
console.log(newNight.get('fullName'));

/**
* 如果computeing 的set的方法，直接可以改变fullname的值得
*/

const NewPerson2 = EmberObject.extend({
  fName: null,
  lName: null,
  //这里就不是个funtion(){} 的回掉了，而是一个{}的 callback
  fullName: Ember.computed('fName', 'lName',{
    get(){
      return
    },
    set(key,value){
      const [f,l] = value.split(/\s/);
      this.set('fName',f);
      this.set('lName',l);
      return value;
    }
  })
});

const newNight2 = NewPerson.create({
  fName: 'Albert',
  lName: 'Yu',
})

console.log('without Ediet = ',newNight2.get('fullName'));
newNight2.set('fName','nightire');
console.log(newNight2.get('fullName'));
newNight2.set('fullName','Yu Fan');

console.log('after Ediet = ',newNight2.get('fullName'));
console.log(newNight2.get('fName'));
console.log(newNight2.get('lName'));
