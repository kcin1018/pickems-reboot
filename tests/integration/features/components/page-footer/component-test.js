import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('page-footer', 'Integration | Component | page footer', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{page-footer}}`);

  assert.equal(this.$('.footer').length, 1, 'It should display a .footer div');
  assert.equal(this.$('.footer .col-xs-4').length, 1, 'It should display a .col-xs-4 div');
  assert.equal(this.$('.footer .col-xs-8').length, 1, 'It should display a .col-xs-8 div');
});
