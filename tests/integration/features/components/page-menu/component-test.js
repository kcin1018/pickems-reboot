import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('page-menu', 'Integration | Component | page menu', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{page-menu}}`);

  assert.equal(this.$('.menu').length, 1, 'it only has one menu');
  assert.equal(this.$('.menu .navbar-brand').length, 1, 'it only has one navbar-brand');
  assert.equal(this.$('.menu .navbar-nav').length, 2, 'it has to navs');
  assert.equal(this.$('.menu .navbar-nav.pull-xs-right').length, 1, 'it has one nav that is right aligned');
});
