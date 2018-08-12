export default (myAngularJSApp) => {
    'use strict';

    myAngularJSApp.directive('sidebar', sidebar);

    /** @ngInject */
    function sidebar() {

        function sidebarController() {
            var vm = this;

            init();

            function init() {

            }
        }

        function link() {

        }

        return {
            bindToController: true,
            controller: sidebarController,
            controllerAs: 'Ctrl',
            link: link,
            templateUrl: 'sidebar.template.html',
            restrict: 'AE',
            scope: {},
        }
    }

};
