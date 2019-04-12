

import { 
    createDrawerNavigator,
    createAppContainer
} from 'react-navigation'

import Inicio from './inicio'
import RegistrarComponent from './registrarproducto'
import CategoriaComponent from './categoria'
import Lista from './../../src/container/crud/listcontainer'
import stackNavigator from './../component/rutas'
import Crear from './crud/crear'
import Rutas from './rutas';

const MenuDrawer = createDrawerNavigator({
    
    Opcion1: {
        screen: Inicio,
        navigationOptions: {
            drawerLabel: 'Inicio'
        }
    },
    Opcion2: {
        screen: Rutas,
        navigationOptions: {
            drawerLabel: 'Listar'
        }
    }
},
{
    initialRouteName: 'Opcion1',
});

export default createAppContainer(MenuDrawer);