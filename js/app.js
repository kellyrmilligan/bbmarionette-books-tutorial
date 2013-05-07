define(['marionette', 'backbone', 'regions/ContentRegion', 'regions/ModalRegion', 'layouts/AppLayout', 'views/MenuItemView', 'routers/Router', 'routers/CloseRouter', 'controllers/BookController', 'controllers/CloseController', 'vent'],
  function (Marionette, Backbone, ContentRegion, ModalRegion, AppLayout, MenuItemView, Router, CloseRouter, BookController, CloseController, vent) {

  var app = new Marionette.Application();

  app.addRegions({
    content: ContentRegion,
    modal: ModalRegion,
    menu: '#menu'
  });

  app.addInitializer(function (options) {

    app.menu.show(new MenuItemView());

  });

  app.addInitializer(function (options) {

    var controller = new BookController();

    var router = new Router({
      controller: controller
    });

  });

  app.addInitializer(function (options) {

    var closeController = new CloseController();

    var closeRouter = new CloseRouter({
      controller: closeController
    });

  });

  app.addInitializer(function (options) {

    vent.on('modal:show', function (detailView) {
      app.modal.show(detailView);
    });

  });

  app.on("initialize:after", function () {
    if (!Backbone.History.started) Backbone.history.start();
  });

  return app;
});