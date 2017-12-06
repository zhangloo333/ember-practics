import Component from '@ember/component';

/**
* actions 加s 不是 ation
*/

export default Component.extend({
  actions: {
    showPerson(person) {
      alert(person);
    }
  }
});
