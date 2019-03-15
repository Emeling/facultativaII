import React from 'react';
import {View,Text,TextInput,Button,select} from 'react-native';
import { Dropdown } from "react-native-material-dropdown";

const RegistrarComponent =(props)=>{

    return(
           <View>
               <View>
                    <Text>Nombre de Producto:</Text>
                    <TextInput></TextInput>
               </View>

               <View>
                    <Text>Precio:</Text>
                    <TextInput keyboardType="numeric" ></TextInput>
               </View>

               <Dropdown
                    label={'Asignar categoria'}
                    data={[
                        {value: "zapatos"},
                        {value: "Mochilas"},
                        {value: "Pantalon"},
                    ]}
               />

               <View>
               <Button title="Registrar"></Button>
               </View>
           </View>
    );
}

export default RegistrarComponent