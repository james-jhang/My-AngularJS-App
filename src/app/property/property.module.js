import 'angular-resource';
import 'angular-ui-grid';
import 'angular-ui-grid/ui-grid.min.css';

import manager from './manager';
import dashboard from './dashboard';
import propertyService from './api';

(function () {
    'use strict';

    angular
        .module('property', [
            'ngResource',
            'ui.grid',
            'ui.grid.autoResize',
            'ui.grid.selection',
            'utility'
        ])
        .factory('propertyService', propertyService)
        .component('manager', manager())
        .component('dashboard', dashboard());

}());