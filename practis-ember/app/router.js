import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this 就是这个router的对象
  this.route('about'); // default
  // this.route('about',{path:'/about-us'}) // as special
  this.route('contact');
  // nest route
  this.route('parent',function() {
    this.route('children')
  })
});

export default Router;
