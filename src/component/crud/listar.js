import React from 'react';

import{
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    FlatList,
    Button
} from 'react-native';

const Lista = (props) => {
    const { datosLista,
    eventoPantallaAgregar}= props;
    return (
        <ScrollView>
            <Button title='Agregar datos'
            onPress = {eventoPantallaAgregar}
            ></Button>
            <FlatList
             data={datosLista}
             renderItem={
                ({Item}) =>{
                    return (
                      <Item
                        item ={item}

                      />  
                    )
                }
             }

            />
        </ScrollView>
    )


}

const Item =(props) => {
    const {Item}= props;
    return(
        <TouchableOpacity>
            <View>
                <Text>
                    {Item.nombre}
                </Text>
            </View>
            <View>
                <Text>
                    {Item.telefono}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
export default Lista;