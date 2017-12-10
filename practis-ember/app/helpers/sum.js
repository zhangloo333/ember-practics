import { helper } from '@ember/component/helper'

export default helper(function(params) {
  return params.reduce((a,b) => {
    return a + b;
  });
});
