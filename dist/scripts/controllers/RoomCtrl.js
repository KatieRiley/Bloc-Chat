(function() {
    function RoomCtrl($stateProvider, $firebaseArray, $scope, Room){
        $stateProvider
            .state('home', {
                url: '/', 
                templateUrl: '/templates/home.html'
            });
        $scope.newRooms = [];
        $firebaseArray.myFirebaseArray = [];
        $scope.newRooms = push(new Room($firebaseArray.myFirebaseArray));
        
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$stateProbider' '$firebaseArray', '$scope', 'Room'])
})