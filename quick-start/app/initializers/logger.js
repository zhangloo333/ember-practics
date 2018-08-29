import config from 'ember-quickstart/config/environment';

export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
  const currentUrl = document.URL;
  console.log('current url', currentUrl);
  console.log('config', config);
  config.rootURL = '/abc/';
  console.log('config', config);
}

export default {
  initialize
};
