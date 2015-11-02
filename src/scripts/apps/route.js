var myApp = angular.module("myApp", ['ngRoute']);

//$routeProvider用来设置URL相关配置，映射到对应的HTML页面或者ng-template，并且绑定到指定控制器
myApp.config(['$routeProvider',
  function($routeProvider) {
  $routeProvider.
  when('/p1', {
    templateUrl: './src/templets/item.html',
    controller: 'p1Controller'
  }).
  when('/p2', {
    templateUrl: './src/templets/item.html',
    controller: 'p2Controller'
  }). 
  when('/p3', {
    templateUrl: './src/templets/item.html',
    controller: 'p3Controller'
  }).
  when('/p4', {
    templateUrl: './src/templets/item.html',
    controller: 'p4Controller'
  }). 
    when('/p5', {
      templateUrl: './src/templets/item.html',
      controller: 'p5Controller'
    }).
    when('/p6', {
      templateUrl: './src/templets/item.html',
      controller: 'p6Controller'
    }). 
  otherwise({
    redirectTo: '/p1'
  });
}]);


myApp.controller('p1Controller', function($scope, $http) {
  $scope.message = "前端集成解决工具";
  var url="./src/jsons/p1.json";
  $http.get(url).success(function(response) {
  $scope.items = response;
  });
});
myApp.controller('p2Controller', function($scope, $http) {
  $scope.message = "前端模块化";
  var url="./src/jsons/p2.json";
  $http.get(url).success(function(response) {
  $scope.items = response;
  });
});

myApp.controller('p3Controller', function($scope, $http) {
  $scope.message = "CSS预处理器 ";
  var url="./src/jsons/p3.json";
  $http.get(url).success(function(response) {
  $scope.items = response;
  });
});

myApp.controller('p4Controller', function($scope, $http) {
  $scope.message = "热门框架 ";
  var url="./src/jsons/p4.json";
  $http.get(url).success(function(response) {
  $scope.items = response;
  });
});

myApp.controller('p5Controller', function($scope, $http) {
  $scope.message = "热门库 ";
  var url="./src/jsons/p5.json";
  $http.get(url).success(function(response) {
  $scope.items = response;
  });
});

myApp.controller('p6Controller', function($scope, $http) {
  $scope.message = "HTML5游戏引擎 ";
  var url="./src/jsons/p6.json";
  $http.get(url).success(function(response) {
  $scope.items = response;
  });
});


//h df
myApp.controller("sidebarNavController", function($scope) {
   $scope.student = {
      subjects:[
            {name:'前端集成解决工具',url:'#p1'},
            {name:'前端模块化',url:'#p2'},
            {name:'CSS预处理器',url:'#p3'},
            {name:'热门框架',url:'#p4'},
            {name:'热门库',url:'#p5'},
            {name:'HTML5游戏引擎',url:'#p6'}
      ]
   };
});
