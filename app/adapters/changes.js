import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  query(store, type, query) {
    let url = "https://lycium-service.herokuapp.com/changes/application/" + query.applicationName + "?in=TEST&notIn=PRODUCTION"

    return this.ajax(url, 'GET' );
  },
});
