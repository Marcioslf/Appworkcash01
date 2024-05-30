const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import NotificationBell1395Svgrepo from "./components/NotificationBell1395Svgrepo";
import AppworkcashAlpha from "./components/AppworkcashAlpha";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import EsqueceuASenhaemail from "./screens/EsqueceuASenhaemail";
import TelaIncial from "./screens/TelaIncial";
import DetalheDaConta from "./screens/DetalheDaConta";
import Configurao from "./screens/Configurao";
import IconChevronBottom from "./components/IconChevronBottom";
import SolicitarSaque from "./screens/SolicitarSaque";
import TransioParaSaqueOk from "./screens/TransioParaSaqueOk";
import TransferenciaOK from "./screens/TransferenciaOK";
import VerificaoEMail from "./screens/VerificaoEMail";
import Notificao from "./screens/Notificao";
import Cadastro from "./screens/Cadastro";
import Dashboard1 from "./screens/Dashboard1";
import Login1 from "./screens/Login1";
import DetalheDaConta1 from "./screens/DetalheDaConta1";
import Notificao1 from "./screens/Notificao1";
import Configurao1 from "./screens/Configurao1";
import Img from "./screens/Img";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Urbanist-Light": require("./assets/fonts/Urbanist-Light.ttf"),
    "Urbanist-Medium": require("./assets/fonts/Urbanist-Medium.ttf"),
    "Urbanist-SemiBold": require("./assets/fonts/Urbanist-SemiBold.ttf"),
    "Urbanist-Bold": require("./assets/fonts/Urbanist-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EsqueceuASenhaemail"
              component={EsqueceuASenhaemail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaIncial"
              component={TelaIncial}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetalheDaConta"
              component={DetalheDaConta}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Configurao"
              component={Configurao}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SolicitarSaque"
              component={SolicitarSaque}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransioParaSaqueOk"
              component={TransioParaSaqueOk}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransferenciaOK"
              component={TransferenciaOK}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerificaoEMail"
              component={VerificaoEMail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notificao"
              component={Notificao}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cadastro"
              component={Cadastro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard1"
              component={Dashboard1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login1"
              component={Login1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetalheDaConta1"
              component={DetalheDaConta1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notificao1"
              component={Notificao1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Configurao1"
              component={Configurao1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Img"
              component={Img}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
