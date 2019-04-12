import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Dimensions
} from 'react-native';

const Crear = (props) => {
    
    const {
        title,
        miEventoCambiarTitulo,
        url,
        precio,
        miEventoCambiarURL,
        miEventoCambiarPrecio,
        miEventoPressGuardar,
        estadoEnGuardado,
    } = props
    return (
        <View style={styles.view}>
            <View>
                <Text style={styles.text}>Título</Text>
                <TextInput
                    value={title}
                    onChangeText={miEventoCambiarTitulo}
                    editable={ estadoEnGuardado === 'cargando' ? false : true }
                />
            </View>
            <View>
                <Text style={styles.text}>URL de Imagen</Text>
                <TextInput
                    value={url}
                    onChangeText={miEventoCambiarURL}
                    editable={ estadoEnGuardado === 'cargando' ? false : true }
                />
            </View>
            <Text style={styles.text}>Precio</Text>
                <TextInput
                    value={precio}
                    onChangeText={miEventoCambiarPrecio}
                    editable={ estadoEnGuardado === 'cargando' ? false : true }
                />
            <View>
                <Button
                    title={'Guardar'}
                    onPress={miEventoPressGuardar}
                    disabled={ estadoEnGuardado === 'cargando' ? true : false }
                />
            </View>
        </View>
    )
};
const styles=StyleSheet.create(
    {
        view:{flex: 1,
            
            paddingHorizontal: 30,
            alignItems:'center',
            padding:30,
        },
        text:{
            textAlign:'center',
            fontSize:15,
            fontWeight: 'bold',
            color:'black',
         },
    }
);
export default Crear;