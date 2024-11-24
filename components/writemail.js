import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState,useContext } from "react";

import * as emailjs from "@emailjs/react-native";
import { onValue, ref } from "firebase/database";
import { db } from "../firebaseconfig";
import { ContextData } from "./context";
export const Writemail = () => {
  const [email, setemail] = useState("");
  const {isClickGet, setisClickGet,setcode,code} =useContext(ContextData);
  const [isenabled, setisenabled] = useState(false)
 
  const handlePress = () => {
    let random = Math.floor(Math.random() * 100000);
    console.log("random sayi" + random);
    
    if (
      email.trim() &&
      (email.includes("@gmail.com") || email.includes("@hotmail.com"))
    ) {
        console.log('gonderildi');
        setisClickGet(true)
        try{
            setisenabled(true)
            setcode(random)
            onValue(ref(db,'Emailjs/'),(snapshot)=>{
                console.log('public key:'+snapshot.child('/publickey').val());
                console.log('template id:'+snapshot.child('/templateid').val());
                console.log('service:'+snapshot.child('/service').val());
                emailjs.send(snapshot.child('/service').val(), snapshot.child('/templateid').val(), {
                    Message:random,
                    email: email,
                  },{publicKey:snapshot.child('/publickey').val()});
            })
        }
        catch(e){
            console.log(e);
        }
        
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: "bold", fontSize: 23, marginBottom: 20 }}>
        Get a Vertifiction code
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
          placeholder="Email"
          style={{ width: "100%", fontSize: 18, height: 50 }}
          onChangeText={(text) => {
            setemail(text);
          }}
          value={email}
          autoFocus={true}
        />
      </View>
      <TouchableOpacity onPress={handlePress} disabled={isenabled}>
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
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Get</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
