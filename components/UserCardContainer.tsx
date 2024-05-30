import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Property1PasswordInput2 from "./Property1PasswordInput2";
import Property1PasswordInput1 from "./Property1PasswordInput1";
import Property1PasswordInput from "./Property1PasswordInput";
import Property1EmailInput from "./Property1EmailInput";
import Property1UsernameInput1 from "./Property1UsernameInput1";
import Property1UsernameInput from "./Property1UsernameInput";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const UserCardContainer = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.component1, styles.component1Position]}>
      <Pressable
        style={styles.property1registerButton}
        onPress={() => navigation.navigate("VerificaoEMail")}
      >
        <Image
          style={[
            styles.property1registerButtonChild,
            styles.component1Position,
          ]}
          contentFit="cover"
          source={require("../assets/rectangle-1731.png")}
        />
        <Text style={styles.registrar}>Registrar</Text>
      </Pressable>
      <Property1PasswordInput2 />
      <Property1PasswordInput1 />
      <Property1PasswordInput />
      <Property1EmailInput />
      <Property1UsernameInput1 />
      <Property1UsernameInput />
    </View>
  );
};

const styles = StyleSheet.create({
  component1Position: {
    overflow: "hidden",
    position: "absolute",
  },
  property1registerButtonChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  registrar: {
    height: "30.91%",
    width: "25.23%",
    top: "33.27%",
    left: "36.62%",
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.urbanistBold,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  property1registerButton: {
    top: 268,
    left: 20,
    width: 325,
    height: 55,
    position: "absolute",
  },
  component1: {
    top: 327,
    left: 31,
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 366,
    height: 343,
  },
});

export default UserCardContainer;
