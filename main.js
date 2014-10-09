function MainCtrl ($scope) {
    scope_ctrl = $scope;
    $scope.data =  {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ],
      axes: {
        data2: 'y2'
      },
      types: {
        data2: 'bar'
      }
    };
    $scope.axis = {
      y: {
        label: {
          text: 'Y Label',
          position: 'outer-middle'
        },
        tick: {
          format: d3.format("$,") // ADD
        }
      },
      y2: {
        show: true,
        label: {
          text: 'Y2 Label',
          position: 'outer-middle'
        }
      }
    }

    $scope.options = {
        axes:{}
    };

    $scope.size =  { width: 500 }
}


angular.module("test", ['c3-angularjs'])
    .controller('Ctrl', MainCtrl);