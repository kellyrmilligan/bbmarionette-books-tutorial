define(['marionette', 'hbs!templates/book-item', 'views/BookItemDetailView', 'vent'],
	function (Marionette, BookItemTemplate, BookItemDetailView, vent) {

  var BookItemView = Marionette.ItemView.extend({
    template: BookItemTemplate,

    events: {
    	'click': 'showBookDetail'
    },

    showBookDetail: function(){
      var detailView = new BookItemDetailView({model: this.model});
      vent.trigger('modal:show', detailView);
    }

  });

  return BookItemView;
});