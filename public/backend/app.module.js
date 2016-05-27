import angular from 'angular';
import router from 'angular-route';
import 'libs/bootstrap/dist/css/bootstrap.min.css';

import {appDirective} from './app.directive';
import {headerNav} from './shared/header_nav_bar/navbar.directive';
import {homepg} from './components/homepg/homepg.module';
import {staff} from './components/staff/members/members.module';

angular.module('killerGuns', [
    router,
    homepg.name,
    staff.name
])
.directive('appContainer', appDirective)
.directive('headerNav', headerNav);
