import template from './manager.html';
import './style/index.css';

'use strict';

export default function manager() {

  function controller(propertyService) {
    var vm = this;
    vm.newProperty = {
      number: null,
      name: null,
      make: null,
      model: null,
      type: null,
      cost: 0,
      presentValue: 0,
      purchaseDate: null,
      ageLimit: 0,
      custodian: null,
      user: null,
      location: null,
      placement: null
    };
    vm.close = close;
    vm.create = create;
    vm.edit = edit;

    vm.$onInit = () => {
      if (vm.mode === undefined) throw "The attribute \"mode\" for property-waiter is required.";
    }

    function close() {
      vm.onClose();
    }

    function create() {
      if (vm.newProperty.number === null) {
        throw 'Property number is required when creating a new property.';
      }
      if (vm.newProperty.make === null) {
        throw 'Property make is required when creating a new property.';
      }
      if (vm.newProperty.model === null) {
        throw 'Property model is required when creating a new property.';
      }
      if (vm.newProperty.type === null) {
        throw 'Property type is required when creating a new property.';
      }
      if (vm.newProperty.cost === null) {
        throw 'Property cost is required when creating a new property.';
      }
      if (vm.newProperty.purchaseDate === null) {
        throw 'Property purchase date is required when creating a new property.';
      }
      if (vm.newProperty.custodian === null) {
        throw 'Property custodian is required when creating a new property.';
      }
      if (vm.newProperty.location === null) {
        throw 'Property location is required when creating a new property.';
      }
      propertyService.api.save(vm.newProperty).$promise.then(function (result) {
        console.log('New property has been created :', result);
        if (vm.onClose) vm.onClose();
      });
    }

    function edit() {
      propertyService.api.edit(vm.existingProperty).$promise.then(function (result) {
        console.log('Property has been updated :', result);
        if (vm.onClose) vm.onClose();
      });
    }

  }

  return {
    bindings: {
      onClose: '&?isLeaving',
      property: '=',
      mode: '<'
    },
    controller: controller,
    controllerAs: 'managerVM',
    template: template
  }
}