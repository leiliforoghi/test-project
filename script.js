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


  //remove row of table
  $scope.removeItem = function (x) {
    $scope.users.splice(x, 1);
  };
  //end remove row of table

  //add row in table
  // $scope.addItem = function (){
  //     $scope.users.push($scope.addMe);
  // $scope.users = [] .push();
  // return ($scope.users);
  // };
  //end add row in table

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

//edit row table
// $scope.editUsers = function (index) {
//     $scope.isadd = false;
//     $scope.addMe = $scope.users[index];
//     $scope.isadd = true;
//     $scope.users.splice(x, 1);

    // };

  //for max input 

   
 //end for max input 

//sort columns
$scope.sort = function(keyname){
    $scope.sortKey = keyname;
    $scope.reverse = !$scope.reverse;
}
//end sort columns




//edit row table
    // $scope.editUsers= function() {
    //   $scope.edit=false;
    //   $scope.change = function(){
    //       $scope.addMe= true;
    //   }
    //   }
 //end edit row table

});
