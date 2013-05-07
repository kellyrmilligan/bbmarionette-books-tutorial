define(['marionette', 'vent'], function (Marionette, vent) {

  var ContentRegion = Marionette.Region.extend({
    el: '#content',

    initialize: function () {
    }

  });

  return new ContentRegion();
});