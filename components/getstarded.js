import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React,{useEffect, useState,useContext} from "react";
import { get, ref } from "firebase/database";
import { db } from "../firebaseconfig";
import { ContextData } from "./context";

export const Getstarted = () => {
    const { isclickSign, setisclickSign, isClickLogin, setisClickLogin } =
    useContext(ContextData);
    const pressSign=()=>{
        setisclickSign(true);
    }
    const pressLogin=()=>{
        setisClickLogin(true)
    }
  return (
   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Image source={require('../assets/—Pngtree—vector mobile app icon_3788422.png')} style={{height:300,width:300}}/>
    <Text style={{fontSize:30,fontWeight:'bold',marginBottom:20}}>Create a Account</Text>
    <TouchableOpacity onPress={pressSign}>
        <View style={{height:50,width:280,borderColor:'black',borderWidth:2,justifyContent:'center',alignItems:'center',borderRadius:10}}>
        <Text style={{fontWeight:'bold',fontSize:18}}>Sign Up</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={pressLogin}>
        <View style={{height:50,width:280,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontWeight:'bold',fontSize:18}}>Log In</Text>
        </View>
    </TouchableOpacity>
   </View>
  );
};

const styles = StyleSheet.create({});
