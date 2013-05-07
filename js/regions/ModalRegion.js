define(['marionette', 'vent'], function (Marionette, vent) {

  var ModalRegion = Marionette.Region.extend({
    el: '#modal',

    initialize: function () {
   	  this.on('show', this.showModal, this);
    },

    getEl: function (selector) {
      var $el = $(selector);
      $el.on('hidden', this.close);
      return $el;
    },

    showModal: function (view) {
      view.on('close', this.hideModal, this);
      this.$el.modal('show');
    },

    hideModal: function () {
      this.$el.modal('hide');
    }

  });

  return ModalRegion;
});