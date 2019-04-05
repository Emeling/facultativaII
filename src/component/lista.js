import React from 'react'
import {View, Text,FlatList,Image} from 'react-native'

const lista = (props) =>{

    const {datos}= props;

    console.log("Lista: ", datos)
    
    return(
        <View>
            <FlatList
                style={{width: '100%', height: '100%',}}
            renderItem={
                ({item})=>{
                    return(
                        <View>
                            <Text>{item.title}</Text>
                            <Image
                                source={{uri: item.url}}
                                style={{width: 200, height: 200, resizeMode: 'cover'}}
                            />
                        </View>

                    )
                }
            }
            data= {datos}
            />
        </View>
    )
}

export default lista
