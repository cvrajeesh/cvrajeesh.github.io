
var App = Ember.Application.create({

	enableThrottling: false
});

App.ApplicationModel = Ember.Object.extend({

	isThrottlingEnabled : App.enableThrottling,
	throttlingChanged: function(){
		console.clear();
		App.enableThrottling = this.get('isThrottlingEnabled');
	}.observes('isThrottlingEnabled')
});

App.ApplicationRoute = Ember.Route.extend({

	model: function(){
		return App.ApplicationModel.create({});
	}
});

App.ApplicationView = Ember.View.extend({
	templateName: 'application',

	mouseMove: function() {
		// Try to access an undefined object to generate an error
		var result = undefinedObject.property;
	}
});

var Infrastructure;

(function(Infrastructure){


	var logger = {
		log: function(){
			console.log(new Date());			
		}
	};

	Infrastructure.logger = logger;


})(Infrastructure || (Infrastructure = {}));

Ember.onerror = function(error){	
	if(App.enableThrottling){
		Ember.run.throttle(Infrastructure.logger, Infrastructure.logger.log, 5000);
	}else{
		Infrastructure.logger.log();
	}
};