import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { ContextData } from "./context";
import { onValue, ref, set } from "firebase/database";
import { db } from "../firebaseconfig";
import { useNavigation } from "@react-navigation/native";

export const Login = () => {
  const { isclickSign, setisclickSign, isClickLogin, setisClickLogin,name, setname } =
    useContext(ContextData);
    const navigation=useNavigation();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [errorText, seterrorText] = useState("");
  const [errorat, seterrorat] = useState();
  const handlePress = () => {
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
      seterrorText("");
      seterrorat(4);
      onValue(ref(db, "DATA/" + username), (snapshot) => {
      
        
        if (snapshot.child("/password").val() != password && snapshot.child('/username').val() != username) {
          seterrorat(0);
          seterrorText('Wrong password and username')
        } else if (snapshot.child("/password").val() != password) {
          seterrorat(2);
          seterrorText("Wrong Password");
          setname(username)
        }
        else if(snapshot.child('/username').val() != username){
          seterrorat(1)
          seterrorText("Wrong Username");
        }
        else{
          seterrorat(4)
          seterrorText('')
          setusername('');
          setpassword('')
          console.log('Giris basarili');
          
        }
      });
    }
  };
const prssforget=()=>{
  
  onValue(ref(db,'DATA/'+username),(snapshot)=>{
    if(snapshot.val() != null && username.trim()){
      setname(username)
      navigation.navigate('screen2')
    }
    else{
      seterrorat(1)
      seterrorText('You have a username for using forgot password')
    }
  })

}
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
                borderWidth: 1,
                borderColor: "white",
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
                borderWidth: 1,
                borderColor: "white",
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
      <TouchableOpacity onPress={prssforget}>
      <Text style={{color:'purple',textDecorationLine:'underline',fontSize:17,fontWeight:'bold',marginBottom:10}} >Forgot Password</Text>
      </TouchableOpacity>
      
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
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Log In</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "600", textAlign: "center" }}>
          I don't have a account
        </Text>
        <TouchableOpacity
          onPress={() => {
            setisclickSign(true);
          }}
        >
          <Text style={{ color: "purple", fontSize: 18, fontWeight: "bold" }}>
            {" "}
            Sign Up
          </Text>
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
