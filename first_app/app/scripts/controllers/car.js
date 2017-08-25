var myApp = angular.module('carApp',[]);
myApp.controller('car', function ($scope) {
  $scope.array = [
    {marque: 'Toyota'},
    {marque: 'Porsch'},
    {marque: 'Ferrari'},
    {marque: 'Aston Martin'},
    {marque: 'Peugeot'},
    {marque: 'Kia'}
  ];
  
});