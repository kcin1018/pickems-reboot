import Ember from 'ember';
import config from 'pickems/config/environment';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['navbar', 'navbar-fixed-top', 'navbar-dark', 'bg-inverse'],
  config: config
});
