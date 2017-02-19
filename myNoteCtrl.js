app.controller('myNoteCtrl', function($scope){
               
               $scope.save = function(){
                    // code to save note to db....
                    alert($scope.message);
                   
                };
               
               $scope.clear = function(){
                   $scope.message = '';
               }
               
               $scope.left = function() {
                   if($scope.message){
                      return 100 - $scope.message.length; 
                   }
                   return 100;
                   
               }
               
               
               });