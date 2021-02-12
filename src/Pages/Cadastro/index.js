import React from "react";
import { Text, SafeAreaView, TouchableOpacity,Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Input from "../../Components/Input";
import User from '../../../assets/users.gif'

export default function Login({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      {" "}
      <LinearGradient
        
        colors={["#f2d2d2", "#fefefe", "#fff"]}
        style={{
          flex: 1,
          width: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={User} style={{width:300, height:300, borderRadius:200}}/>
        
        <br />
        <Input placeholder="  Nome" />
        <Input placeholder="  Usuario" />
        <Input placeholder="  Email" />
        <Input placeholder="  Contato" />
        <Input placeholder="  Senha" />
        <TouchableOpacity
          style={{
            backgroundColor: "#c30005",
            width: "50vh",
            height: 35,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            opacity: "90%",
            marginBottom: 20,
          }}
          title="Ir para Login"
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "#fff" }}>Cadastrar</Text>
        </TouchableOpacity>
       
        <br />
      </LinearGradient>
    </SafeAreaView>
  );
}
