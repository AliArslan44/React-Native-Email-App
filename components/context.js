import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState } from "react";
export const ContextData = createContext();
export const Context = ({ children }) => {
  const [isclickSign, setisclickSign] = useState(false);
  const [isClickLogin, setisClickLogin] = useState(false);
  const [isClickGet, setisClickGet] = useState(false);
  const [isClickEnter, setisClickEnter] = useState(false);
  const [isCreateNewPass, setisCreateNewPass] = useState(false);
  const [name, setname] = useState("");
  const [emai, setemai] = useState("");
  const [code, setcode] = useState("");
  const [verfcode, setverfcode] = useState("");

  return (
    <ContextData.Provider
      value={{
        isclickSign,
        setisclickSign,
        isClickLogin,
        setisClickLogin,
        name,
        setname,
        verfcode,
        setverfcode,
        emai,
        setemai,
        isClickGet,
        setisClickGet,
        setcode,
        code,
        isClickEnter,
        setisClickEnter,
        isCreateNewPass,
        setisCreateNewPass,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};

const styles = StyleSheet.create({});
