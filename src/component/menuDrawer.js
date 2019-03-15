import react from 'react'

import { 
    createDrawerNavigator,
    createAppContainer
} from 'react-navigation'

import Inicio from './inicio'
import RegistrarComponent from './registrarproducto'
import CategoriaComponent from './categoria'
import Lista from './../../src/container/crud/listcontainer'
import Crear from './crud/crear'

const MenuDrawer = createDrawerNavigator({
    Opcion1: {
        screen: Inicio,
        navigationOptions: {
            drawerLabel: 'Inicio'
        }
    },
    Opcion2: {
        screen: CategoriaComponent,
        navigationOptions: {
            drawerLabel: 'Categorias',
            //drawerIcon: <Image source={require('../../assets/categoria.png')} style={{resizeMode: 'cover', width: 24, height: 24,}}/>,
        }
    },
    Opcion3: {
        screen: RegistrarComponent,
        navigationOptions: {
            drawerLabel: 'Registrar Producto'
        }
    },
    Opcion4: {
        screen: Lista,
        navigationOptions: {
            drawerLabel: 'Listar'
        }
    }
},
{
    initialRouteName: 'Opcion1',
});

export default createAppContainer(MenuDrawer);