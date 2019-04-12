import React from 'react'
import {View, Text,FlatList,Image,Button,StyleSheet,Dimensions} from 'react-native'

const lista = (props) =>{
    const { datos, miEventoPressPantallaCrear, miEventoPressPantallaEditar } = props;


    console.log("Lista: ", datos)
    
    return(
        <View>
            <View>
            <Button
                    title={'Agregar producto'}
                    onPress={miEventoPressPantallaCrear}
                />
            </View>
            <FlatList
                style={{width: '100%', height: '100%',}}
            renderItem={
                ({item})=>{
                    return(
                        <View style={styles.view}>

                            <Text style={styles.text}>{item.title}</Text>
                            <Image
                                source={{uri: item.url}}
                                style={{width: 200, height: 200, resizeMode: 'cover'}}
                            />
                            <Text style={styles.textPrecio}>{item.precio} C$</Text>
                        </View>

                    )
                }
            }
            data= {datos}
            />
        </View>
    )
}
const styles=StyleSheet.create(
    {
        view:{flex: 1,
            
            paddingHorizontal: 10,
            alignItems:'center',
            padding:10,
           
            
            backgroundColor:'#D9F3FE'},
        textinput:{
         
            height: 45,backgroundColor:'white',
            borderRadius:10,
            borderColor: 'gray',textAlign:'center',
            borderWidth: 1,fontSize:20, margin:15,
            width:(Dimensions.get('window').width * 80/100)
        },
        text:{
           textAlign:'center',
           fontSize:20,
           fontWeight: 'bold',
           color:'navy',
           
          
           
        },
        textPrecio:{
            textAlign:'center',
            fontSize:15,
            fontWeight: 'bold',
            color:'red',
         },
        viewborder:{
            borderRadius:10,
            backgroundColor:'#67C9F0',
 
        }
 
    }
);
export default lista
