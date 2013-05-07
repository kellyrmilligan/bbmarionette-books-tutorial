define(['marionette', 'hbs!templates/book-detail', 'vent'], function (Marionette, BookItemDetailTemplate, vent) {

  var BookItemDetailView = Marionette.ItemView.extend({
    template: BookItemDetailTemplate,
    className: 'modal bookDetail'

  });

  return BookItemDetailView;
});