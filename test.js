var app = angular.module("app",[])
app.directive("zippy" , function(){
    return {
        restrict : "E" , 
        scope: {
            title : "@" ,
           
        } ,
        transclude : true ,
        template : "<div><h3 ng-click='togglecontent()'>{{title}}</h3><div ng-show='iscontentvisible' ng-transclude>hello world</div></div>"
        ,
        link : function(scope){
            scope.iscontentvisible = false;
            scope.togglecontent = function(){
            scope.iscontentvisible = !scope.iscontentvisible;
         }
        }
    }
})

