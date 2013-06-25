define(['marionette', 'hbs!templates/app-layout', 'vent'],
  function (Marionette, appLayout, vent) {

  var AppLayout = Marionette.Layout.extend({
    template: appLayout,

    regions: {
      search: "#searchBar",
      books: "#bookContainer"
    },

    initialize: function () {
    }

  });

  return AppLayout;
});