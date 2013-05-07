define(['marionette', 'hbs!templates/close', 'vent'],
	function (Marionette, CloseItemTemplate, vent) {

  var CloseItemView = Marionette.ItemView.extend({
    template: CloseItemTemplate,

    className: 'close'

  });

  return CloseItemView;
});