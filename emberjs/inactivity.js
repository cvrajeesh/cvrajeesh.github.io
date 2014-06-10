
// Create Ember app

var App = Ember.Application.create({
	lastActiveTime: null,

	ready: function(){
		App.lastActiveTime = new Date();
	}

});

App.ApplicationView = Ember.View.extend({
	templateName: 'application',
	

	mouseMove: function() {
		App.lastActiveTime = new Date();
	},

	touchStart: function() {
		App.lastActiveTime = new Date();
	},

	keyDown: function() {
		App.lastActiveTime = new Date();	
	}
});

App.ApplicationController = Ember.Controller.extend({

	_tick: null,

	tick: function(){
		var that = this;
		Ember.run.later(function(){
			that.set('_tick', new Date());
		}, 1000);
	}.observes('_tick').on('init'),

	lastActiveTimeFromNow: function(){
		var duration;
		if(App.lastActiveTime){
			duration = moment().diff(moment(App.lastActiveTime));
			return moment.utc(duration).format("HH:mm:ss");
		}

		return "Just now";
	}.property('_tick')
});

