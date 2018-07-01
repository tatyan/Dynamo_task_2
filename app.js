(function () {
'use strict';

angular.module('myApp', [])

.controller('MyController', function ($scope) {
	$scope.msg = "";
	$scope.key = "";
	$scope.encryptedRes = "";
	$scope.decodedRes = "";
  
	$scope.displayEncrypted = function(){
	var encryptedMsg = ShiftReverse($scope.msg, $scope.key);
	  $scope.encryptedRes = encryptedMsg;
  }
  
  $scope.displayDecoded = function(){
	  var decodedMsg = ShiftReverse($scope.encryptedRes, -$scope.key);
	  $scope.decodedRes = decodedMsg;
  }
  function ShiftReverse(strMsg, key){
	var resMsg = "";
	for (var i = strMsg.length-1; i>=0; i--){
		resMsg += String.fromCharCode((strMsg.charCodeAt(i))+key);
	}
	return resMsg;
  }
});

})();