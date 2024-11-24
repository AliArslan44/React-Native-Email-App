import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import React, { useState,useContext } from "react";
  import { onValue, ref } from "firebase/database";
  import { db } from "../firebaseconfig";
  import { ContextData } from "./context";
export const Waitscreen = () => {
    const {setcode,code,isClickEnter, setisClickEnter} =useContext(ContextData);
    const [entercode, setentercode] = useState('')
    const handlePress=()=>{
        if(entercode.trim() && entercode == code){
          console.log('yeni ekran');
          setisClickEnter(true)
          setentercode('')
        }
    }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: "bold", fontSize: 23, marginBottom: 20 }}>
        Enter Your Vertifiction code
      </Text>
      <View
        style={{
          backgroundColor: "lightgray",
          width: "80%",
          height: 50,
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          borderWidth: 1,
          borderColor: "white",
        }}
      >
        <TextInput
          placeholder="Enter Your Code"
          style={{ width: "100%", fontSize: 18, height: 50 }}
          onChangeText={(text) => {
            setentercode(text);
          }}
          value={entercode}
         
        />
      </View>
      <TouchableOpacity onPress={handlePress} >
        <View
          style={{
            width: 180,
            height: 45,
            borderColor: "black",
            borderWidth: 2,
            borderRadius: 41,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Enter</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({})