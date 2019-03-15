import React from 'react';
import {
    TextInput,
    View,
    Text,
    Button

} from 'react-native';

const Crear=(props) =>{

    const{    
        nombre,
        eventoNombre,

        telefono,
        eventoTelefono,

        eventoCrear,
    }=props;

    return(
        <View>
            <View>
                <Text>
                    Ingresar nombre: </Text>
                <TextInput
                onChangeText={eventoNombre}
                value={nombre}
                />
            </View>
            <View>
                <Text>
                    Ingresar telefono: </Text>
                <TextInput
                onChangeText={eventoTelefono}
                value={telefono}
                />
            </View>
            <View>
                <Button
                title={'Crear'}
                onPress={eventoCrear}

                />
            </View>
        </View>

    )
}
export default Crear;