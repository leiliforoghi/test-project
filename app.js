// 'ngRoute' for in broket in below

var num = angular.module("num", ['angularUtils.directives.dirPagination']);
num.controller("numberc", function ($scope) {
  $scope.currentUser;
  $scope.pageType;
  $scope.users = [
    {
      Id: "1",
      firstName: "علی",
      lastName: "نیازی",
      email: "ali_1@gmail.com",
      jens: "مرد",
      salary: "563225000",
      minTransaction: "10",
      maxTransaction: "12",
    },
    {
      Id: "2",
      firstName: "نیما",
      lastName: "اصحابی",
      email: "nima.gh@gmail.com",
      jens: "مرد",
      salary: "452100",
      minTransaction: "5",
      maxTransaction: "16",
    },
    {
      Id: "3",
      firstName: "مینا",
      lastName: "راد",
      email: "mina325@gmail.com",
      jens: "زن",
      salary: "532000",
      minTransaction: "25",
      maxTransaction: "200",
    },
    {
      Id: "4",
      firstName: "لیلی",
      lastName: "فروغی",
      email: "leliforoghi@gmail.com",
      jens: "زن",
      salary: "25698",
      minTransaction: "100",
      maxTransaction: "120",
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
    }

    //for max conditions
      if(user.maxTransaction>=user.minTransaction){
        console.log("i");
        $scope.users.push(user);
      }
      else{
        console.log('error');
      }
      //for reset form input
      $scope.firstName='';
      $scope.lastName='';
      $scope.email='';
      $scope.jens='';
      $scope.salary='';
      $scope.minTransaction='';
      $scope.maxTransaction='';
  };
  
  // $scope.ok = function () {
  //   modalInstance.close($scope.selected.item);
  // };

  // $scope.cancel = function () {
  //   modalInstance.dismiss('cancel');
  // };
  
  // $scope.showDialog = function() {
  //   console.log('hi')
  //   var modalInstance = $modal.open({
  //     templateUrl: 'style.css',
  //     controller: 'DialogController',
  //     resolve: {
  //       model: function() {
  //         return $scope.myData;
  //       }
  //     }
  //   });
  // }
  // $scope('#exampleModal1').modal('hide');
  //end add row in table

// $scope.editUsers=function(){
//   var index = getSelectedIndex = ($scope.Id);
//   $scope.users[index]= $scope.firstName;
//   $scope.users[index]= $scope.lastName;
//   $scope.users[index]= $scope.email;
//   $scope.users[index]= $scope.jens;
//   $scope.users[index]= $scope.salary;
//   $scope.users[index]= $scope.minTransaction;
//   $scope.users[index]= $scope.maxTransaction;
// };


//sort columns
$scope.sort = function(keyname){
    $scope.sortKey = keyname;
    $scope.reverse = !$scope.reverse;

}
//end sort columns


//edit row table
$scope.editUsers = function(user){
var findUser=$scope.users.find(x=>x.Id==user.Id);
$scope.currentUser=findUser;
$scope.pageType;
// for(var i=0;i<this.users.length;i++)



// };

// $scope.edi=true;
// $scope.create=false;
}

// $scope.firstName = angular.copy(firstName);
// $scope.lastName = angular.copy(lastName);
// $scope.email = angular.copy(email);
// $scope.jens = angular.copy(jens);
// $scope.salary = angular.copy(salary);
// $scope.minTransaction = angular.copy(minTransaction);
// $scope.maxTransaction = angular.copy(maxTransaction);


// $scope.selectEdit = function(Id){
//     var index = ($scope.Id);
//     var users = $scope.users[index];
//     $scope.Id = users.Id;
//     $scope.firstName = users.firstName;
//     $scope.lastName = users.lastName;
//     $scope.email = users.email;
//     $scope.jens = users.jens;
//     $scope.salary = users.salary;
//     $scope.minTransaction = users.minTransaction;
//     $scope.maxTransaction = users.maxTransaction;
// };

 //end edit row table

 
  //remove row of table
  $scope.removeItem = function(Id){
    for(var i=0;i<this.users.length;i++){
      if(this.users[i].Id==Id)
         index=i;
    }
    $scope.users.splice(index, 1);
  }
  //end remove row of table
  
  //pass form data to modal

  //end pass form data to modal


});


num.directive("edit-view",function(){
  return {
    templateUrl:"edit.html",
    $scope:$scope,
    replace:true,

    
  };
});

// var editView = angular.module("editView", ['']);
// num.controller("appcontroler", function ($scope,$http,$modal) {
  // var modalinstance = null;
  
  // $scope.editUsers = function(x){
  // if(Id > 0){
    // $http.get("./index.html"+ Id)
    // .then(function(response){
      //   modalinstance = $modal.open({
      //   animation: true,
      //   templateUrl:"./edit.html",
      //   controller: "appcontroler",
      //   $scope:$scope,
      //   size:'',
      //   backdrop: true,
      //   windowClass: 'modal',
      //   resolve:{
      //     record : function(){
      //       return response.data;
      //     }
      //   }
      // });
    
    // });
  // }
  
  // }
// }
// });