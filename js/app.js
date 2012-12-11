define([
'jquery',
'underscore',
'backbone'
], function($, _, Backbone) {

	var initialize = function() {

		console.log("application init");


        // Model and Collection
        var SingleItem = Backbone.Model.extend({
          urlRoot : '/data/item.json',
          parse: function(response) {
              console.log(response);
              return response;
          }
        });

        var ManyCollection = Backbone.Collection.extend({
          model: SingleItem,
          url: '/data/items.json',
        });

        var many = new ManyCollection();
        many.fetch();
        console.log(many);

        var single = new SingleItem();
        single.fetch({
          success: function(data) {
            console.log("OK"); 
            console.log(data.toJSON());
          },
          error: function(data){
            console.log("NOK");
          }
        });


        console.log(single.get('name'));


	};

	return {
		initialize: initialize
	};

});
