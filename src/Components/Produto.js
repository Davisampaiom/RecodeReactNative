import React from 'react';
import {Text, View, Image} from 'react-native'




const Produto = ({image, title, price}) => {
    return (
        <View style={{flex:2, alignItems: 'center',
        justifyContent:'center',margin:10,backgroundColor:'#fff',
        width:'40vh', height:'35vh', borderRadius:15,
        }}>
            <Image style={{width:70, height:100, marginTop:5}} source={{ uri:image}} />
            <center><Text style={{color:'#000',marginTop:2}}>{title}</Text></center>
            <Text style={{color:'#000', fontWeight:'bold',}}>R$ {price}</Text>
            <br />
        </View>
    )
}

export default Produto;