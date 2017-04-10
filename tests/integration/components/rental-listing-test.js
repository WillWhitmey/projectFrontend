import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
// import { expect } from 'chai';

moduleForComponent('rental-listing', 'Integration | Component | rental listing', {
  integration: true
});


test('should render a commit change', function(assert) {
  this.set('rentalUnit', {commit: { message: 'success' }})
  this.render(hbs`{{rental-listing rental=rentalUnit}}`);

  // expect(this.$('h3').text()).to.include('rental.commit.message');
  assert.equal(this.$('h3').text(), 'success');
});

test('should render a git URL', function(assert) {
  this.set('rentalUnit', {
    commit:
     {
       url: 'https://github.com/Goji-P2P/admin-ui/commit/078d17246e87f651ae58ce12494a3133df440a0a'
      }
   })
  this.render(hbs`{{rental-listing rental=rentalUnit}}`);

  assert.equal(this.$('.url').text(), 'https://github.com/Goji-P2P/admin-ui/commit/078d17246e87f651ae58ce12494a3133df440a0a');
});
