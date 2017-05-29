'use strict';

angular.module("shopApp")
  .controller('LandingCtrl', function ($scope, $resource, $rootScope, SweetAlert, ngDialog, urlParser) {



    $scope.buttons = [
      {
        button:"상담하기",
        dialog:{template: 'views/templates/dialog/counsel.html',showClose: false,controller: 'PopUpsCtrl'}
      },
      {
        button:"제작하기",
        dialog:{template: 'views/templates/dialog/payment.html',showClose: false,controller: 'PopUpsCtrl'}
      }
    ];

    $scope.footers=[
      {info:"상호: ", detail:"아이디스트"},
      {info:"대표이사: ", detail:"김선욱"},
      {info:"주소: ", detail:"서울특별시 중구 다산로 258, B동 1922호"},
      {info:"이메일: ", detail:"ceo@idist.ai"},
      {info:"사업자등록번호: ", detail:"546-20-00066"},
      {info:"통신판매업 신고번호: ", detail:"546-20-00066"},
      {info:"개인정보 처리방침", detail:""}
    ];


  	$scope.initialize = function(){
      if($rootScope.service){
        $scope.titles = $rootScope.service.titles;
        $scope.background = $rootScope.service.background;
        $scope.solutions = $rootScope.service.solutions;
        $scope.style = $rootScope.service.style;
        $scope.price = $rootScope.service.price;
      }
   	};
    $rootScope.$watch('service', function(){
      $scope.initialize();
    });
  });
