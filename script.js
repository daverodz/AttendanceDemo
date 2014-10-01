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

	// create the controller and inject Angular's $scope
	attApp.controller('mainController', function($scope, $location) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
		$scope.login = function () {
        	$location.path("/sections");
      	};
	});

	attApp.controller('sectionsController', function($scope, $location) {
		$scope.sections = [
        {name:'sections 1'},
        {name:'sections 2'},
        {name:'sections 3'},
        {name:'sections 4'}
      ];
      $scope.section = function () {
        	$location.path("/section");
      	};
      	$scope.createsections = function () {
      	};
	});

	attApp.controller('sectionController', function($scope) {
		$scope.message = 'Section Page';
	});
	attApp.controller('attendanceController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
