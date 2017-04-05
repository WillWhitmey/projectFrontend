import Ember from 'ember';

export default Ember.Component.extend({
  isClicked: false,
  actions: {
    showMenu: function(){
      this.toggleProperty('isClicked');
    }
  }
});
