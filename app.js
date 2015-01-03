'use strict';

function genArray(rows, cols){
	var cells = new Array(cols);	
	for (var i = 0; i < cols; i++){	
		cells[i] = new Array(rows);
		for (var j = 0; j < rows; j++){
			cells[i][j] = false;
		}
	}
	return cells;
}

function genString($scope){	
		
}

angular.module('LoLShieldCalc', [])		
	.controller('LoLCtrl', function($scope){
		$scope.width = 14;
		$scope.heigth = 9;
		$scope.cells = genArray($scope.width, $scope.heigth);
		$scope.change = function(){
			$scope.ledString="";
			for (var x = 0; x < $scope.heigth; x++){
				for (var y = 0; y < $scope.width; y++){
					if ($scope.cells[x][y]){		
							$scope.ledString = $scope.ledString + "P(" + x + "," + y + "), ";
						}
					}
			}	
			if ($scope.ledString.length > 0){

				$scope.ledString = "{ " + $scope.ledString +  "END };";
			}
		};
	});
	
  
