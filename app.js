// 'ngRoute' for in broket in below

var num = angular.module("num", ['angularUtils.directives.dirPagination']);
num.controller("numberc", function ($scope) {

  $scope.users = [
    {
      Id: "1",
      firstName: "علی",
      lastName: "نیازی",
      email: "ali_1@gmail.com",
      jens: "مرد",
      salary: "563225000",
      minTransaction: "55555200",
      maxTransaction: "533554400",
    },
    {
      Id: "2",
      firstName: "نیما",
      lastName: "اصحابی",
      email: "nima.gh@gmail.com",
      jens: "مرد",
      salary: "452100",
      minTransaction: "452100",
      maxTransaction: "444440",
    },
    {
      Id: "3",
      firstName: "مینا",
      lastName: "راد",
      email: "mina325@gmail.com",
      jens: "زن",
      salary: "532000",
      minTransaction: "85422",
      maxTransaction: "55",
    },
  ];



  //add row in table
  $scope.addUsers = function () {
    
    var user = {
      Id: $scope.users.length + 1,
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      email: $scope.email,
      jens: $scope.jens,
      salary: $scope.salary,
      minTransaction: $scope.minTransaction,
      maxTransaction: $scope.maxTransaction,
    };
    $scope.users.push(user);
    
  };
  //end add row in table


  //for max input 
 //end for max input 

//sort columns
$scope.sort = function(keyname){
    $scope.sortKey = keyname;
    $scope.reverse = !$scope.reverse;
    // $scope.$index = !$scope.$index;
}
//end sort columns


//edit row table
// $scope.editUsers = function(x){

//   $scope.modify = true;
//   $scope.view = true;
// };
// $scope.update = function(x){

//   $scope.modify = false;
//   $scope.view = false;
// };
 //end edit row table

 
  //remove row of table
  
  $scope.removeItem = function(x) {
  $scope.users.splice(x,1);
    // $scope.user.splice($scope.user.indexOf($scope.users[index]), 1);
  //  angular.forEach($scope.user, function(value,index){
  //    if(x.firstName == value.firstName){
  //      $scope.user.splice(index,1);
  //    }
  //  });
  }
  //end remove row of table
  

});
