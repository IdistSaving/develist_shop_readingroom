'use strict';

angular.module("shopApp")
  .controller('PopUpsCtrl', function ($scope, $resource, $rootScope, SweetAlert, ngDialog, DevelistShopCounselR, DevelistShopPaymentR) {

    $scope.clickClose = function(){
      ngDialog.close();
    };

    $scope.saveCounsel = function(){

    };

    $scope.saveCounsel = function(){
      $scope.counsel_model.host = $rootScope.urlParser.getHostname();
      DevelistShopCounselR.save(
        $scope.counsel_model,
        function(success){
        }, function(fail){
      });
    };

    $scope.savePayment = function(){
      $scope.payment_model.host = $rootScope.urlParser.getHostname();
      DevelistShopPaymentR.save(
        $scope.payment_model,
        function(success){
        }, function(fail){
      });
    };

    $scope.infos = [
      {info:"이름", input_type:"text", model:"name"},
      {info:"상호", input_type:"text", model:"shop_name"},
      {info:"번호", input_type:"tel", model:"phone"},
      {info:"이메일", input_type:"email", model:"email"}
    ];

    $scope.counsel_model = {
      host:'',
      name:'',
      shop_name:'',
      phone:'',
      email:'',
      counsel:''
    };

    $scope.payment_model = {
      host:'',
      name:'',
      shop_name:'',
      phone:'',
      email:''
    };

    $scope.clickGo = function(url){
      var openNewWindow = window.open("about:blank");
      openNewWindow.location.href = url;
    };

    $scope.pc_buttons = [
      {button:"웹사이트", url:"https://www.naver.com/"},
      {button:"관리자페이지", url:"https://www.google.co.kr/"}
    ];

    $scope.mobile_buttons = [
      {button:"웹사이트", url:"https://m.naver.com/"},
      {button:"관리자페이지", url:"http://m.blog.naver.com/"}
    ];

    $scope.sns_button =
      {button:"그래머 웹사이트 구경하기", url:"http://grammer.kr/"};

    $scope.payment =
    {ment:"신한은행 0201403310 김선욱(아이디스트)으로 5,000,000원 입금해주세요."}


  	$scope.initialize = function(){
      $scope.pc = $rootScope.service.popup.pc;
      $scope.mobile = $rootScope.service.popup.mobile;
      $scope.sns = $rootScope.service.popup.sns;
      $scope.contact = $rootScope.service.contact;
   	};
   	$scope.initialize();
  });
