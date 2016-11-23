(function() {
  'use strict';

angular.
    module('app').controller('navigationController', navigationController);


function navigationController(){
    var vm = this;
    vm.links = [
        {
            title: 'About Me', 
            url: 'http://deyandimov.com/#'
        }, {
            title: 'StackTracker', 
            url: 'http://deyandimov.com/stacktracker'
        }
    ];
}
})();