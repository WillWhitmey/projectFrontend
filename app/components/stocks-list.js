import Ember from 'ember';

const { $, inject } = Ember;

export default Ember.Component.extend({

  store: inject.service(),

  stocks: null,

  init() {
    this._super(...arguments);
    $.getJSON('http://localhost:4567/stocks/').then(data => {
      console.log(data);
      this.set('stocks', data);
    });
  },

  actions: {
    buyStock() {
      console.log('hi'),
      $.ajax({
        type: "PUT",
        ContentType: "application/json; charset=utf-8",
        contentType: "application/json", // send as JSON
        url: "http://localhost:4567/stocks/update/",
        data: JSON.stringify({
          "id": "1",
          "price": "7500"
        })
      })
    }
  }

});


// $.ajax({
//
//     url: apiurl,
//     type: "POST",
//     ContentType: "application/json; charset=utf-8",
//     data: Lead,
//     crossOrigin: true,
//     dataType: "json",
//     cache: false,
//     complete: function (res) {
//         alert("Data Added Successfully");
//     },
//     error: function (xhr) {
//         alert("Error");
//     }
// })
