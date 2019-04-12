import React, {Component} from 'react';

import Lista from './../../component/lista';
import firebase from 'react-native-firebase';

class Listcontainer extends Component{

    constructor (props){
        super (props)
        this.state = {
            datos:[],
        };
    }

    render (){
        const {datos} = this.state;

        return(
            <Lista
                datos={datos}
                miEventoPressPantallaCrear={ this.miEventoPressPantallaCrear }
                miEventoPressPantallaEditar={ this.miEventoPressPantallaEditar }
            />
        )

    }
    miEventoPressPantallaCrear = () => {
        this.props.navigation.navigate('crear');
    }
    //Caso de prueba guardar datos
    //async componentDidMount(){
       // this.agregardDatos([
           // {nombre: 'Jarol', teleffono: '82333248',},
       // ]);
       // console.log("Probando la base de datos",await this.obtenerDatos());
   // }

    componentDidMount()
    {
       // const datos = await this.obtenerDatos();
        //.log("ObteniendoDatos", datos);
        //if (datos !== null){
           // this.setState({
           // crud: datos,
            // });
       // }
       
        const db =firebase.firestore();
        db.collection('producto').onSnapshot((instantanea)=>{
            const {datos} = this.state;
            instantanea.docChanges.forEach((cambio)=>{
                const indice = datos.findIndex(item => item.key === cambio.doc.id);

                console.log("Datos: ", cambio.doc.data())

                switch(cambio.type){
                    case 'added':{
                        datos.push({
                            key: cambio.doc.id,
                            title: cambio.doc.data().title,
                            precio: cambio.doc.data().precio,
                            url: cambio.doc.data().url,

                        });
                        break
                    }
                    case 'modified':{
                        if (indice !==-1){
                            datos[indice].title = cambio.doc.data().title;
                            datos[indice].url = cambio.doc.data().url;
                            datos[indice].precio = cambio.doc.data().precio;

                        }
                        break;
                    }
                    case 'removed':{
                        if (indice !==-1){
                            datos.splice(indice,1);
                        }
                        break;
                    }
                }
            });
            this.setState({
                datos:datos,
            });

        });

    }
           
}


export  default Listcontainer;;