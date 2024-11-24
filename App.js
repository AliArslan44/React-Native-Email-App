import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";
import { Sign } from "./components/sign";
import { Login } from "./components/login";
import { Getstarted } from "./components/getstarded";
import { Context, ContextData } from "./components/context";
import { useContext, useEffect, useRef } from "react";
import { Writemail } from "./components/writemail";
import { Waitscreen } from "./components/waitcodescreen";
import { Newpass } from "./components/newpass";

export default function App() {
  return <Main />;
}
const Main = () => {
  const Stack = createStackNavigator();

  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="screen1"
            component={Screen1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="screen2"
            component={Screen2}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  );
};
const Screen1 = () => {
  const pageref = useRef(null);
  const {
    isclickSign,
    setisclickSign,
    isClickLogin,
    setisClickLogin,
    isCreateNewPass,
    setisCreateNewPass,
  } = useContext(ContextData);
  useEffect(() => {
    if (isclickSign) {
      pageref.current.setPage(1);
      setisclickSign(false);
    }
  }, [isclickSign]);
  useEffect(() => {
    if (isClickLogin) {
      pageref.current.setPage(2);
      setisClickLogin(false);
    }
  }, [isClickLogin]);

  useEffect(() => {
    if (isCreateNewPass) {
      pageref.current.setPage(2);
      setisCreateNewPass(false)
    }
  }, [isCreateNewPass]);
  return (
    <PagerView style={{ flex: 1 }} ref={pageref}>
      <View style={styles.container}>
        <Getstarted />
      </View>
      <View style={styles.container}>
        <Sign />
      </View>
      <View style={styles.container}>
        <Login />
      </View>
    </PagerView>
  );
};
const Screen2 = () => {
  const pager = useRef(null);
  const { isClickGet, setisClickGet, isClickEnter, setisClickEnter } =
    useContext(ContextData);
  useEffect(() => {
    if (isClickGet) {
      pager.current.setPage(1);
      setisClickGet(false);
    }
  }, [isClickGet]);
  useEffect(() => {
    if (isClickEnter) {
      pager.current.setPage(2);
      setisClickEnter(false);
    }
  }, [isClickEnter]);
  return (
    <PagerView style={{ flex: 1 }} ref={pager}>
      <View style={styles.container}>
        <Writemail />
      </View>
      <View style={styles.container}>
        <Waitscreen />
      </View>
      <View style={styles.container}>
        <Newpass />
      </View>
    </PagerView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
