var app = angular.module("myApp",[])
app.controller("myCTRL",($scope,$http)=>{
    $scope.list=[]
    $scope.newData={}
    $scope.qty=1
    $scope.getData = function(){
        $http.get("/api/book").then((response)=>{
            $scope.list = response.data;
        })
        
    }

    $scope.postData = function(newData) {
        if($scope.newData.price>500){
            $http.post("/api/add",$scope.newData).then((response)=>{
                $scope.list = response.data;
                $scope.getData();
            })
        }        
    }

    $scope.getData();
})