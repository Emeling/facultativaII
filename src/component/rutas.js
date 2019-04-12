import React from 'react';
import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import Lista from './.././container/crud/listcontainer';
import Crear from './.././container/crud/crearcontainer';
import Editar from './.././container/crud/editarcontainer';

const stackNavigator = createStackNavigator({
    lista: {
        screen: Lista,
    },
    crear: {
        screen: Crear,
    },
    editar: {
        screen: Editar,
    },
}, {
    defaultNavigationOptions: {
        headerTitle: 'Productos',
        headerStyle: {
            backgroundColor: '#673ab7',
        },
        headerTintColor: '#ffffff',
    },
});

export default createAppContainer(stackNavigator);