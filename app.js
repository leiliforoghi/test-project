var app = angular.module("app", ["angularUtils.directives.dirPagination","cur.$mask"]);
app.controller("numberc", function ($scope) {
  $scope.currentUser;
  $scope.users = [
    {
      Id: "1",
      firstName: "علی",
      lastName: "نیازی",
      email: "ali_1@gmail.com",
      jens: "آقا",
      salary: 563225000,
      minTransaction: 10,
      maxTransaction: 12,
    },
    {
      Id: "2",
      firstName: "نیما",
      lastName: "اصحابی",
      email: "nima.gh@gmail.com",
      jens: "آقا",
      salary: 452100,
      minTransaction: 5,
      maxTransaction: 16,
    },
    {
      Id: "3",
      firstName: "مینا",
      lastName: "راد",
      email: "mina325@gmail.com",
      jens: "خانم",
      salary: 532000,
      minTransaction: 25,
      maxTransaction: 200,
    },
    {
      Id: "4",
      firstName: "لیلی",
      lastName: "فروغی",
      email: "leliforoghi@gmail.com",
      jens: "خانم",
      salary: 25698,
      minTransaction: 100,
      maxTransaction: 120,
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

    //for max conditions
    if (user.maxTransaction >= user.minTransaction) {
      console.log("i");
      $scope.users.push(user);
    } else {
      console.log("error");
    }
    //for reset form input
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.email = "";
    $scope.jens = "";
    $scope.salary = "";
    $scope.minTransaction = "";
    $scope.maxTransaction = "";
  };
    //end add row in table

  //sort columns
  $scope.sort = function (keyname) {
    $scope.sortKey = keyname;
    $scope.reverse = !$scope.reverse;
  };
  //end sort columns
  //add user
  $scope.addUser = function () {
    $scope.removeadd = false;
    $scope.viewedit = false;
    $scope.user = null;
  };
  //end add user

  //edit row table
  $scope.editUsers = function (user) {
    $scope.removeadd = true;
    $scope.viewedit = true;
    var findUser = $scope.users.find((x) => x.Id == user.Id);
    $scope.Id = angular.copy(findUser.Id);
    $scope.firstName = angular.copy(findUser.firstName);
    $scope.lastName = angular.copy(findUser.lastName);
    $scope.email = angular.copy(findUser.email);
    $scope.jens = angular.copy(findUser.jens);
    $scope.salary = angular.copy(findUser.salary);
    $scope.minTransaction = angular.copy(findUser.minTransaction);
    $scope.maxTransaction = angular.copy(findUser.maxTransaction);
  };

  //update row table
  $scope.save = function (user) {
    var users = $scope.users;
    users.map(function (x) {
    
        if (x.Id == $scope.Id) {
          x.Id = $scope.Id;
          x.firstName = $scope.firstName;
          x.lastName = $scope.lastName;
          x.email = $scope.email;
          x.jens = $scope.jens;
          x.salary = $scope.salary;
          x.minTransaction = $scope.minTransaction;
          x.maxTransaction = $scope.maxTransaction;
        }
     
    });


  };
  
  //end edit row table

  //remove row of table
  $scope.removeItem = function (Id) {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].Id == Id) index = i;
    }
    $scope.users.splice(index, 1);
    $scope.newStudent = {};
  };
  //end remove row of table

});
