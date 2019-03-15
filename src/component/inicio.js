import React from 'react';
import {View,Text,TextInput,Button,Image} from 'react-native';

const Inicio =(props)=>{

    return(
           <View>
              <Image source={require('./../../assets/imagen.jpg')} width={200} height={200} ></Image>
               <Text>Hola este es el menu de inicio </Text>
               <Image source={require('./../../assets/imagen2.jpg')}></Image>
               <Button title="Aceptar"></Button>
           </View>

    );
}

export default Inicio