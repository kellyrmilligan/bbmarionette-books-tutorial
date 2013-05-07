define(['marionette', 'regions/ContentRegion', 'layouts/AppLayout', 'views/SearchItemView', 'views/BookCompositeView', 'collections/BookCollection', 'models/StateModel', 'vent'],
  function (Marionette, ContentRegion, AppLayout, SearchItemView, BookCompositeView, BookCollection, StateModel, vent) {

  var BookController = Marionette.Controller.extend({

    initialize: function (options) {
    },

    default: function () {
      this.search(StateModel.get('previousSearch') || 'Neuromarketing');
    },

    search: function (term) {
      var appLayout = new AppLayout();
      ContentRegion.show(appLayout);
      appLayout.search.show(new SearchItemView());
      appLayout.books.show(new BookCompositeView({
        collection: new BookCollection()
      }));
      vent.trigger('search:term', term);
    }

  });

  return BookController;
});