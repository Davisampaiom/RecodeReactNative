import React from "react";
import { Text, SafeAreaView,View, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Store from '../../../assets/store.gif'

export default function Home({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={[ "#f2d2d2", "#fefefe", "#fff"]}
        style={{
          flex: 1,
          width: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
       <View style={{flex:2, justifyContent:'center'
      , alignItems:'center', margin:10,}}>
       <Text style={{ color: "#000"}}>Seja bem vindo(a)!</Text>
       <br />
        <Text style={{ color: "#000" }}><center>Aqui em nossa loja, <em>programadores tem desconto</em><p> nos produtos
          para sua casa!</p></center></Text>

       </View>
       <Image source={Store} style={{width:250, height:250,marginBottom:10}} />
        <br />
        <br />

        <TouchableOpacity
          style={{
            backgroundColor: "#c30005",
            width: '50vh',
            height: 35,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            opacity:'90%',
            marginBottom:20,
            

          }}
          title="Ir para Login"
          onPress={() => navigation.navigate("Login")}
        >
            <Text style={{ color: "#fff" }}>Login</Text>
        </TouchableOpacity>
          <TouchableOpacity
          style={{
            backgroundColor: "#c30005",
            width: '50vh',
            height: 35,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            opacity:'90%',

            marginBottom:40,

          }}
          title="Ir para Cadastro"
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={{ color: "#fff" }}>Cadastro</Text>
        </TouchableOpacity>
 

        <br />
      </LinearGradient>
    </SafeAreaView>
  );
}
