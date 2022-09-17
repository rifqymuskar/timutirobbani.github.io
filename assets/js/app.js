var app = angular.module("timutirobani", ["ngRoute"])

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "./home.html"
  })
  .when("/resume", {
    templateUrl : "./resume.html"
  })
  .when("/portofolio", {
    templateUrl : "./portofolio.html"
  })
  .when("/certificate", {
    templateUrl : "./certificate.html"
  })
  .when("/contact", {
    templateUrl : "./contact.html"
  })

  // $locationProvider.html5Mode({
	// 	enabled: true,
	// 	requireBase: true 
	// });
});

app.run(function($rootScope, $location){
  $rootScope.getClassParent = function (path) { 
    console.log(path)
    return ($location.path() == path) ? 'active' : ''
  }
})