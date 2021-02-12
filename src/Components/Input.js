import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function Input({placeholder}) {
  return (
    <TextInput
      type="text"
      placeholder=  {placeholder}
      placeholderTextColor="#000"
     style={styles.input}
    />
   
  );
}
const styles = StyleSheet.create({
    input:{ width:'50vh',
    height:35,
           border:'solid',
           borderRadius:7,
           marginBottom:10,
           color:'#b60f0f',
             }
    
})