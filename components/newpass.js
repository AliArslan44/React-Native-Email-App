import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useContext } from "react";

import * as emailjs from "@emailjs/react-native";
import { onValue, ref, update } from "firebase/database";
import { db } from "../firebaseconfig";
import { ContextData } from "./context";
import { useNavigation } from "@react-navigation/native";
export const Newpass = () => {
  const navigation = useNavigation();
  const { name, setname, isCreateNewPass, setisCreateNewPass, code } =
    useContext(ContextData);
  const [newpassword, setnewpassword] = useState("");
  const [confirmpass, setconfirmpass] = useState("");
  const [errorText, seterrorText] = useState("");
  const handlePress = () => {
    if (code != null && code != undefined && code != "") {
      seterrorText('')
      onValue(ref(db, "DATA/" + name), (snapshot) => {
        if (
          confirmpass != snapshot.child("/password").val() &&
          newpassword != snapshot.child("/password").val()
        ) {
          update(ref(db, "DATA/" + name + "/"), {
            password: newpassword,
          });

          setisCreateNewPass(true);
          navigation.navigate("screen1");
        } else {
          seterrorText("Your old pass and new pass must not be same");
        }
      });
    }
    else{
      seterrorText('You dont have verfiction code')
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: "bold", fontSize: 23, marginBottom: 20 }}>
        Create Your new password
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
          marginBottom:10
        }}
      >
        <TextInput
          placeholder="Enter Your New Password"
          style={{ width: "100%", fontSize: 18, height: 50 }}
          onChangeText={(text) => {
            setnewpassword(text);
          }}
          value={newpassword}
          secureTextEntry
        />
      </View>
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
          placeholder="Confirm Password"
          style={{ width: "100%", fontSize: 18, height: 50 }}
          onChangeText={(text) => {
            setconfirmpass(text);
          }}
          value={confirmpass}
          secureTextEntry
        />
      </View>
      <Text>{errorText}</Text>
      <TouchableOpacity onPress={handlePress}>
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
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Create</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
