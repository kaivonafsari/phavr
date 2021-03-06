angular.module('phavr.favorCreationMap', [])
  .controller('FavorCreationMapCtrl', function($scope, Favors, mapService) {

    $scope.init = function() {
      var markerMap = {};
      var map = mapService.createMap();
      //mapService.addBoundsListener(map, markerMap);
      mapService.addPlaceChangedListener(map, false);
      mapService.addDefaultMarker(map);
    }

    $scope.init();

  });
