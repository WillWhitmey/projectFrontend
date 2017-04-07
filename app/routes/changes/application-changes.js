import Ember from 'ember';

const { Route, $ } = Ember;

export default Route.extend({
  model(params) {
    return $.ajax({
            url: "https://lycium.herokuapp.com/changes/application/" + params.application_name + "?in=TEST&notIn=PRODUCTION",
            type: 'GET',
            success: function(res) {
              let data = res;
              console.log(data);
              return data
            }
        });
  }
});
