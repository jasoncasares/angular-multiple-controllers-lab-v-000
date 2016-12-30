function ContactController() {
  this.name = 'Name';
  this.email = 'email@email.com';
  this.phone = '999-999-9999';

  var vm = this;

  this.changeName = function () {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
