import Ember from 'ember';
import config from 'pickems/config/environment';

export default Ember.Route.extend({
  setupController(controller) {
    this._super(...arguments);

    controller.set('config', config);
  }
});
