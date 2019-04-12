import React from 'react';
import {View,Text,TextInput,Button,Image,StyleSheet,Dimensions} from 'react-native';

const Inicio =(props)=>{

    return(
           <View style={styles.view}>
              <Image source={require('./../../assets/imagen.jpg')} width={200} height={200} ></Image>
               <Text style={styles.text}>Hola este es el menu de inicio </Text>
               <Image source={require('./../../assets/imagen2.jpg')}></Image>
               <Button title="Aceptar"></Button>
           </View>

    );
}
const styles=StyleSheet.create(
    {
        view:{flex: 1,
            
            paddingHorizontal: 10,
            alignItems:'center',
            padding:10,
        },
        text:{
            textAlign:'center',
            fontSize:20,
            fontWeight: 'bold',
            color:'black',
            
           
            
         },
    }
);

export default Inicio