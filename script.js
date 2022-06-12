// 'ngRoute' for in broket in below  

    var num = angular.module('num',['ngRoute']);
    num.controller('numberc',function($scope){
       $scope.users = [
           {
            "Id" : "1",
            "firstName" : "ali",
            "lastName" : "niazi",
            "email" : "ali_1@gmail.com",
            "jens" : "male",
            "salary" : "563225000",
            "minTransaction" : "55555200",
            "maxTransaction" : "533554400"
           },
           {
            "Id" : "2",
            "firstName" : "nima",
            "lastName" : "ashabi",
            "email" : "nima.gh@gmail.com",
            "jens" : "male",
            "salary" : "452100",
            "minTransaction" : "452100",
            "maxTransaction" : "444440"
           },
           {
            "Id" : "3",
            "firstName" : "mina",
            "lastName" : "rad",
            "email" : "mina325@gmail.com",
            "jens" : "female",
            "salary" : "532000",
            "minTransaction" : "85422",
            "maxTransaction" : "55"
           },
       ];
     
    //    $scope.getData = function($scope){
    //     if (angular.isDefined($scope.firstName) && $scope.firstName != '' && $scope.lastName != '') 
    //     {
    //         // ADD A NEW ELEMENT.
    //         $scope.users.push({ name: $scope.firstName, price: $scope.lastName });

    //         // CLEAR THE FIELDS.
    //         $scope.fname = '';
    //         $scope.lname = '';
    //     }
    // }
    $scope.delete = function(users) {
        $scope.items.splice($scope.users.indexOf(x), 1);
      }

    });
   

    