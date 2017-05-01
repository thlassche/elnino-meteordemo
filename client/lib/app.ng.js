angular.module('elninoMeteorDemo',[
  'angular-meteor',
  'ui.router',
  'ngMaterial'
]).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('blue');
});

function onReady() {
  angular.bootstrap(document, ['elninoMeteorDemo'], {strictDi: true});
}

if (Meteor.isCordova)
  angular.element(document).on("deviceready", onReady);
else
  angular.element(document).ready(onReady);

