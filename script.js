	// create the module and name it attApp
	var attApp = angular.module('AttendanceDemo', ['ngRoute']);

	// configure our routes
	attApp.config(function($routeProvider) {
		$routeProvider

			// route for the login page
			.when('/', {
				templateUrl : 'pages/login.html',
				controller  : 'mainController'
			})

			// route for the sections list page
			.when('/sections', {
				templateUrl : 'pages/sections.html',
				controller  : 'sectionsController'
			})

			// route for the section page
			.when('/section', {
				templateUrl : 'pages/section.html',
				controller  : 'sectionController'
			})
			// route for the attendance page
			.when('/attendance', {
				templateUrl : 'pages/attendance.html',
				controller  : 'attendanceController'
			});
	});
	
	attApp.service('sectionService', function() {
		var name = '';
		return{
			getName: function(){
				return name;
			},
			setName: function(value){
				name = value;
			}
		};
	});
			
	// create the controller and inject Angular's $scope
	attApp.controller('mainController', function($scope, $location) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
		$scope.login = function () {
        	$location.path("/sections");
      	};
	});

	attApp.controller('sectionsController', function($scope, $location, sectionService) {
		$scope.sections = [
        {name:'sections 1'},
        {name:'Alexanders Section'},
        {name:'sections 3'},
        {name:'sections 4'}
      ];
        $scope.switchSection = function (sectionName) {
        	sectionService.setName(sectionName.name);
		$location.path("/section");
      	};
      	$scope.createsections = function () {
      	};
	});

	attApp.controller('sectionController', function($scope, sectionService) {
		$scope.message = 'Section: ' + sectionService.getName();
	});
	attApp.controller('attendanceController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
	
