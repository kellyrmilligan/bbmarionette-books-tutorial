define(['marionette', 'views/BookItemView', 'hbs!templates/book-list', 'models/StateModel', 'vent'],
  function (Marionette, BookItemView, BookListTemplate, StateModel, vent) {

  var BookCompositeView = Marionette.CompositeView.extend({
    template: BookListTemplate,
    id: 'bookList',
    className: 'table-striped table-bordered',
    itemView: BookItemView,

    itemViewContainer: '.books',

    ui: {
      books: '.books'
    },

    events: {
      'scroll': 'loadMoreBooks'
    },

    initialize: function () {
      vent.on('search:error', this.showMessage, this);
      vent.on('search:noSearchTerm', this.showMessage , this);
      vent.on('search:noResults', this.showMessage, this);
      vent.on('search:clearMessage', this.clearMessage, this);
    },

    showMessage: function (message) {
      this.ui.books.html('<h1 class="notFound">' + message + '</h1>');
    },

    clearMessage: function() {
      this.ui.books.html('');
    },

    loadMoreBooks: function () {
      var totalHeight = this.$('> div').height(),
          scrollTop = this.$el.scrollTop() + this.$el.height(),
          margin = 200;

      // if we are closer than 'margin' to the end of the content, load more books
      if (scrollTop + margin >= totalHeight) {
        vent.trigger("search:more");
      }
    },

    onClose: function () {
      this.collection.onClose();
      vent.off('search:error', this.showMessage, this);
      vent.off('search:noSearchTerm', this.showMessage , this);
      vent.off('search:noResults', this.showMessage, this);
      vent.off('search:clearMessage', this.clearMessage, this);
      StateModel.set('previousSearch', this.collection.previousSearch);
    }

  });

  return BookCompositeView;
});