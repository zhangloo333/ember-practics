import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  str: '',
  upCase: computed('str', {
    get() {
      return this.get('str').toUpperCase();
    },
    set(key, newVal) {
      console.log('key= ', key, 'newval');
      this.set('str', newVal.toLowerCase());
      return newVal.toUpperCase();
    }
  })
});
