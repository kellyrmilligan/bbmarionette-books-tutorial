define(['marionette', 'hbs!templates/search', 'vent'], function (Marionette, SearchItemTemplate, vent) {

  var SearchItemView = Marionette.ItemView.extend({
    template: SearchItemTemplate,

    events: {
      'change #searchTerm': 'search'
    },

    ui: {
      spinner: '#spinner',
      searchTerm: '#searchTerm'
    },

    initialize: function () {
      vent.on('search:start', this.toggleSpinner, this);
      vent.on('search:stop', this.toggleSpinner, this);
      vent.on('search:term', this.setSearchTerm, this);
    },

    toggleSpinner: function (e) {
      if (e === 'start') {
        this.ui.spinner.fadeIn();
      } else {
        this.ui.spinner.fadeOut();
      }
    },

    setSearchTerm: function(term) {
      if (!this.ui.searchTerm.val()) {
        this.ui.searchTerm.val(term);
      }
    },

    search: function () {
      var searchTerm = this.ui.searchTerm.val().trim();
      if (searchTerm.length > 0) {
        vent.trigger('search:clearMessage');
        vent.trigger('search:term', searchTerm);
      } else {
        vent.trigger('search:noSearchTerm', "Hummmm, can do better :)");
      }
    },

    onClose: function () {
      vent.off('search:start', this.toggleSpinner, this);
      vent.off('search:stop', this.toggleSpinner, this);
      vent.off('search:term', this.setSearchTerm, this);
    }

  });

  return SearchItemView;
});