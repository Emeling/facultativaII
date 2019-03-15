import React, {Component} from 'react';

import Lista from './../../component/crud/listar';
import {AsyncStorage,Alert } from 'react-native';

class Listcontainer extends Component{

    constructor (props){
        super (props)
        this.state = {
            agenda:[],
        };
    }

    agregardDatos = async (Crud) =>{
        try{
                        
            const crudEnEstring = JSON.stringify({
                datosLista: crud,
            });

            const resultadoObtenerDatos = this.obtenerDatos();

            if (resultadoObtenerDatos === null) {
                await AsyncStorage.setItem('Crud', crudEnEstring);
            }  
            else{
                await AsyncStorage.mergeItem ('Crud', crudEnEstring)
            } 
            await AsyncStorage.setItem('Crud', crudEnEstring);
        }
        catch(error){

        }
    }

    obtenerDatos = async() =>{
        try {
            const crud = await AsyncStorage.getItem('crud')
            if(crud=== null){
                Alert.alert("yo soy un mensaje","no hay datos en la agenda");
                return null;
            }
            else{
                const arreglocrud = JSON.parse(crud);
                return arreglocrud.datosLista;
            }
        }
        catch (error){

        }
    }

    render (){
        const {crud} = this.state;
        console.log(crud);

        return(
            <Lista
                datosLista={crud}
            />
        )

    }
    //Caso de prueba guardar datos
    //async componentDidMount(){
       // this.agregardDatos([
           // {nombre: 'Jarol', teleffono: '82333248',},
       // ]);
       // console.log("Probando la base de datos",await this.obtenerDatos());
   // }

    async componentDidMount(){
        const datos = await this.obtenerDatos();
        console.log("ObteniendoDatos", datos);
        if (datos !== null){
            this.setState({
            crud: datos,
             });
        }
    }

}
export  default Listcontainer;;