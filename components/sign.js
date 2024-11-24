import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ref, update } from "firebase/database";
import { db } from "../firebaseconfig";
import { ContextData } from "./context";

export const Sign = () => {
  const { isclickSign, setisclickSign, isClickLogin, setisClickLogin,name, setname } =
    useContext(ContextData);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [errorText, seterrorText] = useState("");
  const [errorat, seterrorat] = useState();
  const handlePress = () => {
    console.log(username.length);

    if (!username.trim() && !password.trim()) {
      seterrorText("inputs are not valid");
      seterrorat(0);
    } else if (!username.trim()) {
      seterrorText("username not valid");
      seterrorat(1);
    } else if (!password.trim()) {
      seterrorText("password not valid");
      seterrorat(2);
    } else if (username.length <= 5) {
      seterrorText("username must be 5-21 words");
      seterrorat(1);
    } else if (password.length <= 5) {
      seterrorText("password must be 5-21 words");
      seterrorat(2);
    } else {
      setname(username)
      seterrorText("");
      seterrorat(4);
      update(ref(db, "DATA/" + username), {
        username: username,
        password: password,
      });
      setusername("");
      setpassword("");
      setisClickLogin(true);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("../assets/—Pngtree—vector mobile app icon_3788422.png")}
        style={{ height: 150, width: 150 }}
      />
      <View
        style={
          errorat == 0 || errorat == 1
            ? styles.errorInput
            : {
                backgroundColor: "lightgray",
                width: "80%",
                height: 50,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
              }
        }
      >
        <TextInput
          placeholder="Username"
          style={{ width: "100%", fontSize: 18, height: 50 }}
          maxLength={21}
          onChangeText={(text) => {
            setusername(text);
          }}
          value={username}
        />
      </View>
      <View
        style={
          errorat == 0 || errorat == 2
            ? styles.errorInput
            : {
                backgroundColor: "lightgray",
                width: "80%",
                height: 50,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
                marginTop: 20,
                marginBottom: 10,
              }
        }
      >
        <TextInput
          placeholder="Password"
          style={{ width: "100%", fontSize: 18, height: 50 }}
          secureTextEntry
          maxLength={21}
          onChangeText={(text) => {
            setpassword(text);
          }}
          value={password}
        />
      </View>
      <Text
        style={{
          marginBottom: 10,
          color: "red",
          fontSize: 17,
          fontWeight: "700",
        }}
      >
        {errorText}
      </Text>
      <TouchableOpacity onPress={handlePress}>
        <View
          style={{
            width: 200,
            height: 45,
            borderColor: "black",
            borderWidth: 2,
            borderRadius: 41,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500" }}>SignUp</Text>
        </View>
      </TouchableOpacity>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:10}}>
        <Text style={{ fontSize: 16, fontWeight: "600", textAlign: "center" }}>
          Already I have a account 
         </Text>
        <TouchableOpacity onPress={()=>{setisClickLogin(true)}}>
          <Text style={{color:'purple',fontSize:18,fontWeight:'bold'}}> Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  errorInput: {
    backgroundColor: "lightgray",
    width: "80%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 20,
    marginBottom: 10,
    borderColor: "red",
    borderWidth: 1,
  },
});
