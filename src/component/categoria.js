import React from 'react'
import {View,Text,TextInput,Button,StyleSheet} from 'react-native';

const CategoriaComponent =(props) => {
    
    return( 
    <View>
        <View>
        <Text>Agregar categoría</Text>
        </View>

        <View>
            <Text>Nombre de la categoría</Text>
            <TextInput></TextInput>
        </View>

        <View>
            <Button title='Guardar'></Button>
        </View>
    </View>
    );
}

export default CategoriaComponent