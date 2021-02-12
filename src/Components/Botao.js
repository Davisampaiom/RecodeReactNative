import React from 'react';
import { Text, TouchableOpacity} from 'react-native';

export default function Botao(texto){
    return(
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
}}title="Ir para Produtos"
>
<Text style={{ color: "#fff" }}>{texto}</Text>
</TouchableOpacity>
    )
}
