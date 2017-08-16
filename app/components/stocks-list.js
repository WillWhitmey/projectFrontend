import Ember from 'ember';

const { $, inject } = Ember;

export default Ember.Component.extend({

  store: inject.service(),

  stocks: null,

  init() {
    this._super(...arguments);
    $.getJSON('http://localhost:4567/stocks/').then(data => {
      this.set('stocks', data);
      console.log(this.get('stocks'));
    });
  }

});
