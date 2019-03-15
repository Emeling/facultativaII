/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Login from './src/component/login';
import Inicio from './src/component/inicio';
import Registrar from './src/component/registrarproducto';
import MenuDrawer from './src/component/menuDrawer'
import Listcontainer from './src/container/crud/listcontainer'

AppRegistry.registerComponent(appName, () => MenuDrawer);
