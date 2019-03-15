import React from 'react';
import {View,Text,TextInput,Button,Image,StyleSheet} from 'react-native';

const LoginComponent =(props)=>{

    return(
           <View style={styles.contenedor}>
               <Image
               //aplicando estilo a imagen, se definio abajo con el nombre Imagenlogo
               style={styles.imagenLogo}
               source={require('../../assets/logotipo.png')}/>

               <View>
                    <Text>Usuario:</Text>
                    <TextInput></TextInput>
               </View>

               <View>
                    <Text>Contraseña:</Text>
                    <TextInput secureTextEntry={true} ></TextInput>
               </View>

               <View>
                    <Button title="Entrar"></Button>
               </View>
           </View>

    );
}
const styles = StyleSheet.create({
    imagenLogo: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
    },
    contenedor: {
        //flexDirection: 'row',
        justifyContent: 'center', //si fexDirection está en row justifyContent funciona en vertical
        alignItems: 'center', //si fexDirection está en row alignItems funciona en horizontal
        width: '100%',
        height: '100%',
    }
});

export default LoginComponent