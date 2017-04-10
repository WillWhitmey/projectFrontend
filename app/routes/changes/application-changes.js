import Ember from 'ember';

const { Route, $ } = Ember;






export default Route.extend({

  model(params) {
    return this.store.query('changes', {
      applicationName: params.application_name
    });
  }

});
