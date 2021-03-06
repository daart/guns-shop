import angular from 'angular';
import router from 'angular-route';
import 'libs/bootstrap/dist/css/bootstrap.min.css';

import {appDirective} from './app.directive';
import {navBar} from './shared/header_nav_bar/navbar.directive';
import {homepg} from './components/homepg/homepg.module';


angular.module('killerGuns', [
    router,
    homepg.name
])
.directive('appContainer', appDirective)
.directive('headerNav', navBar);

console.log(angular);
