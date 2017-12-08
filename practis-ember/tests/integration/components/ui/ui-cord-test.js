import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui/ui-cord', 'Integration | Component | ui/ui cord', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui/ui-cord}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui/ui-cord}}
      template block text
    {{/ui/ui-cord}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
