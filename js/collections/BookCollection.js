define(['backbone', 'models/BookModel', 'vent'], function (Backbone, BookModel, vent) {

  var BookCollection = Backbone.Collection.extend({

    model: BookModel,

    url: 'https://www.googleapis.com/books/v1/volumes',

    maxResults: 40,

    page: 0,

    loading: false,

    totalItems: null,

    previousSearch: null,

    initialize: function () {
      vent.on('search:term', this.search, this);
      vent.on('search:more', this.moreBooks, this);
    },

    search: function (searchTerm, add) {
      if (this.loading) {
        return true;
      }
      var opts = {};

      opts = {
        dataType: 'jsonp',
        data: {
          q: searchTerm,
          maxResults: this.maxResults,
          startIndex: this.page * this.maxResults,
          fields: 'totalItems,items(id,volumeInfo/title,volumeInfo/subtitle,volumeInfo/authors,volumeInfo/publishedDate,volumeInfo/description,volumeInfo/imageLinks)'
        }
      };

      if (add) {
        _.extend(opts, {
          remove: false,
          update: true
        });
      }

      vent.trigger("search:start", 'start');

      this.loading = true;

      this.fetch(opts)
        .then(this.searchSuccess.bind(this), this.searchFailure.bind(this));

      this.previousSearch = searchTerm;
    },

    searchSuccess: function(res) {
      vent.trigger('search:stop', 'stop');
      this.loading = false;
      if (this.length === 0) {
        vent.trigger("search:noResults", "No Books Found :(");
      }
    },

    searchFailure: function(res) {
      vent.trigger("search:error", "Error, please retry later :s");
      this.loading = false;
    },

    parse: function (res) {
      if (typeof res === 'object' && res.items) {
        if (res && res.hasOwnProperty('totalItems')) {
          this.totalItems = res.totalItems;
          this.page++;
        }
        return res.items;
      } else {
        return null;
      }
    },

    moreBooks: function () {
      if(this.length >= this.totalItems) {
        return true;
      }

      this.search(this.previousSearch, true);
    },

    onClose: function () {
      vent.off('search:term', this.search, this);
      vent.off('search:more', this.moreBooks, this);
    }

  });

  return BookCollection;
});