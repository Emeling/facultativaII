import React, { Component } from 'react';
import Crear from './../../component/crear';
import firebase from 'react-native-firebase'

class CrearContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //estado de nuestros datos
            title: '',
            url: '',
            precio: '',

            //estado de nuestra interfaz
            estadoEnGuardado: 'comienzo',
        };
    }

    miEventoCambiarTitulo = (title) => {
        this.setState({
            title: title,
            estadoEnGuardado: 'comienzo',
        });
    }

    miEventoCambiarURL = (url) => {
        this.setState({
            url: url,
            estadoEnGuardado: 'comienzo',
        })
    }

    miEventoCambiarPrecio = (precio) => {
      this.setState({
          precio: precio,
          estadoEnGuardado: 'comienzo',
      })
  }

    miEventoPressGuardar = () => {

        this.setState({
            estadoEnGuardado: 'cargando',
        })

        const db = firebase.firestore();

        const {
            title,
            url,
            precio,
        } = this.state;

        db
        .collection('producto')
        .add({
            title: title,
            url: url,
            precio: precio,
        })
        .then(() => {
            this.setState({
                title: '',
                url: '',
                precio: '',
                estadoEnGuardado: 'guardado',
            })
        })
        .catch((error) => {
            this.setState({
                estadoEnGuardado: 'error',
            })
        })
    }

    render() {

        const { 
            title,
            url,
            precio,
            estadoEnGuardado,
        } = this.state

        return(
            <Crear
                title={title}
                miEventoCambiarTitulo={this.miEventoCambiarTitulo}
                url={url}
                miEventoCambiarURL={this.miEventoCambiarURL}
                precio={precio}
                miEventoCambiarPrecio={this.miEventoCambiarPrecio}
                miEventoPressGuardar={this.miEventoPressGuardar}
                estadoEnGuardado={estadoEnGuardado}
            />
        )

    }

}

export default CrearContainer;