import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('home');
  },
  model() {
    return $.ajax({
            url: "https://lycium.herokuapp.com/changes/application/" + "ISA_APPLICATION" + "?in=TEST&notIn=PRODUCTION",
            type: 'GET',
            success: function(res) {
              let data = res;
              console.log(data);
              return data
            }
        });
  }
});
