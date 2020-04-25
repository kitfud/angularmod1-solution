(function () {
    'use strict';
    angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController); 
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){   
    $scope.lunchItems = "";
    $scope.output = "";
    

    $scope.sayMessage = function() {
        $scope.output = getStatus($scope.lunchItems);
    }



    function getStatus(stringItems){
    //take input and split into an array
  
    let arrayItems = stringItems.split(",");
    
    //check for blank spaces and splice off if needed with recursion
    function removeBlank(array){
        for(var i =0;i<array.length;i++){
            console.log(array[i])
            let inner = array[i].trim();//trim off white space incase user inputs weird input eg. "1,   ,3"
               if  (inner === ""){
                   array.splice(i,1)
                   removeBlank(array)
               }
              }
          return array;
        }

    let items = removeBlank(arrayItems);   

    let arrayLength = items.length;

    //decide on message to be return based on items in array
    if(arrayLength>3){
        return "Too much!" 
    }
    if (arrayLength>0 && arrayLength <=3){
        return "Enjoy!"   
    }
    else{
        return "Please enter data first"
    }
    }}
    
    
    })();