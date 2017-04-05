import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return $.ajax({
            url: "https://lycium.herokuapp.com/changes/application/" + "SECURITY_APPLICATION" + "?in=TEST&notIn=PRODUCTION",
            type: 'GET',
            success: function(res) {
              let data = res;
              console.log(data);
              return data
            }
        });
  }
});
