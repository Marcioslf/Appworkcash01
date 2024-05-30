import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Notificao1 = () => {
  return (
    <View style={styles.notificao}>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/32.png")}
      />
      <View style={[styles.frameParent, styles.frameParentLayout]}>
        <View style={[styles.rectangleWrapper, styles.frameParentLayout]}>
          <View style={[styles.frameChild, styles.frameLayout]} />
        </View>
        <View style={[styles.rectangleContainer, styles.frameParentLayout]}>
          <View style={[styles.frameChild, styles.frameLayout]} />
        </View>
        <View style={[styles.rectangleParent, styles.frameParentLayout]}>
          <View style={[styles.frameInner, styles.frameLayout]} />
          <View style={[styles.groupWrapper, styles.wrapperLayout]}>
            <View style={[styles.comissoWrapper, styles.wrapperLayout]}>
              <Text style={styles.comisso}>Comissão</Text>
            </View>
          </View>
          <View style={[styles.rectangleView, styles.frameChild1Layout]} />
          <View style={[styles.frameChild1, styles.frameChild1Layout]} />
          <View style={styles.vectorParent}>
            <Image
              style={[styles.componentChild, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-9.png")}
            />
            <Image
              style={[styles.componentItem, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-9.png")}
            />
            <Image
              style={[styles.componentInner, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-9.png")}
            />
            <Image
              style={[styles.ellipseIcon, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-9.png")}
            />
            <Image
              style={[styles.componentChild1, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-9.png")}
            />
            <Text style={[styles.vendaRealizadaId, styles.vendaTypo]}>
              Venda realizada (ID 123123)
            </Text>
            <Text style={[styles.vendaRealizadaId1, styles.vendaTypo]}>
              Venda realizada (ID 123123)
            </Text>
            <Text style={[styles.vendaRealizadaId2, styles.vendaTypo]}>
              Venda realizada (ID 123123)
            </Text>
            <Text style={[styles.vendaRealizadaId3, styles.vendaTypo]}>
              Venda realizada (ID 123123)
            </Text>
            <Text style={[styles.vendaRealizadaId4, styles.vendaTypo]}>
              Venda realizada (ID 123123)
            </Text>
            <Text style={[styles.r123222300, styles.r123222300Typo]}>
              R$ 12.322.23.00
            </Text>
            <Text style={[styles.r1232223001, styles.r123222300Typo]}>
              R$ 12.322.23.00
            </Text>
            <Text style={[styles.r1232223002, styles.r123222300Typo]}>
              R$ 12.322.23.00
            </Text>
            <Text style={[styles.r1232223003, styles.r123222300Typo]}>
              R$ 12.322.23.00
            </Text>
            <Text style={[styles.r1232223004, styles.r123222300Typo]}>
              R$ 12.322.23.00
            </Text>
            <View style={styles.componentChild2} />
            <View
              style={[styles.componentChild3, styles.componentChildPosition]}
            />
            <View
              style={[styles.componentChild4, styles.componentChildPosition]}
            />
          </View>
          <Image
            style={[styles.frameChild2, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-9.png")}
          />
          <Text style={[styles.vendaRealizadaId5, styles.vendaTypo]}>
            Venda realizada (ID 123123)
          </Text>
          <Text style={[styles.r1232223005, styles.r123222300Typo]}>
            R$ 12.322.23.00
          </Text>
          <Text style={styles.notificaes}>{`Notificações `}</Text>
        </View>
        <View style={[styles.rectangleFrame, styles.frameParentLayout]}>
          <View style={[styles.frameChild, styles.frameLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentLayout: {
    height: 825,
    position: "absolute",
  },
  frameLayout: {
    opacity: 0.4,
    height: 617,
    width: 373,
    backgroundColor: Color.colorLightslategray_100,
    borderRadius: Border.br_11xl,
    left: "50%",
    top: 104,
    position: "absolute",
  },
  wrapperLayout: {
    height: 18,
    width: 203,
    position: "absolute",
  },
  frameChild1Layout: {
    height: 1,
    width: 335,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  childLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vendaTypo: {
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.urbanistLight,
    fontWeight: "300",
    position: "absolute",
  },
  r123222300Typo: {
    color: Color.colorIndigo,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  componentChildPosition: {
    left: "1.18%",
    right: "0%",
    width: "98.82%",
    height: "0.3%",
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  icon: {
    top: 775,
    borderRadius: Border.br_xl,
    height: 157,
    width: 430,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    marginLeft: -186,
  },
  rectangleWrapper: {
    top: 0,
    width: 430,
    left: 0,
  },
  rectangleContainer: {
    left: 430,
    top: 0,
    width: 430,
  },
  frameInner: {
    marginLeft: -187,
  },
  comisso: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.urbanistLight,
    fontWeight: "300",
    height: 18,
    width: 203,
    top: 0,
    left: 0,
    position: "absolute",
  },
  comissoWrapper: {
    top: 0,
    left: 0,
  },
  groupWrapper: {
    top: 203,
    left: 230,
  },
  rectangleView: {
    top: 403,
    left: 53,
    width: 335,
    backgroundColor: Color.colorGainsboro,
  },
  frameChild1: {
    top: 342,
    left: 51,
  },
  componentChild: {
    bottom: "52.55%",
    left: "0%",
    right: "93.81%",
    width: "6.19%",
    height: "6.31%",
    maxWidth: "100%",
    top: "41.14%",
  },
  componentItem: {
    bottom: "73.87%",
    top: "19.82%",
    left: "0%",
    right: "93.81%",
    width: "6.19%",
    height: "6.31%",
    maxWidth: "100%",
  },
  componentInner: {
    top: "0%",
    bottom: "93.69%",
    left: "0%",
    right: "93.81%",
    width: "6.19%",
    height: "6.31%",
    maxWidth: "100%",
  },
  ellipseIcon: {
    top: "61.86%",
    bottom: "31.83%",
    left: "0%",
    right: "93.81%",
    width: "6.19%",
    height: "6.31%",
    maxWidth: "100%",
  },
  componentChild1: {
    top: "85.59%",
    bottom: "8.11%",
    left: "0%",
    right: "93.81%",
    width: "6.19%",
    height: "6.31%",
    maxWidth: "100%",
  },
  vendaRealizadaId: {
    top: "0.3%",
    left: "8.85%",
    width: "59.88%",
    height: "5.41%",
    fontSize: FontSize.size_smi,
  },
  vendaRealizadaId1: {
    left: "8.85%",
    width: "59.88%",
    height: "5.41%",
    fontSize: FontSize.size_smi,
    top: "19.82%",
  },
  vendaRealizadaId2: {
    left: "8.85%",
    width: "59.88%",
    height: "5.41%",
    fontSize: FontSize.size_smi,
    top: "41.14%",
  },
  vendaRealizadaId3: {
    top: "62.16%",
    left: "8.85%",
    width: "59.88%",
    height: "5.41%",
    fontSize: FontSize.size_smi,
  },
  vendaRealizadaId4: {
    top: "86.49%",
    left: "8.85%",
    width: "59.88%",
    height: "5.41%",
    fontSize: FontSize.size_smi,
  },
  r123222300: {
    top: "42.64%",
    left: "73.16%",
    width: "22.42%",
    height: "3.9%",
    color: Color.colorIndigo,
    fontSize: FontSize.size_3xs,
  },
  r1232223001: {
    top: "21.32%",
    left: "73.16%",
    width: "22.42%",
    height: "3.9%",
    color: Color.colorIndigo,
    fontSize: FontSize.size_3xs,
  },
  r1232223002: {
    top: "1.5%",
    left: "73.16%",
    width: "22.42%",
    height: "3.9%",
    color: Color.colorIndigo,
    fontSize: FontSize.size_3xs,
  },
  r1232223003: {
    top: "63.66%",
    left: "73.16%",
    width: "22.42%",
    height: "3.9%",
    color: Color.colorIndigo,
    fontSize: FontSize.size_3xs,
  },
  r1232223004: {
    top: "87.69%",
    left: "73.16%",
    width: "22.42%",
    height: "3.9%",
    color: Color.colorIndigo,
    fontSize: FontSize.size_3xs,
  },
  componentChild2: {
    top: "14.71%",
    right: "0.59%",
    bottom: "84.98%",
    left: "0.59%",
    width: "98.82%",
    height: "0.3%",
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  componentChild3: {
    top: "76.28%",
    bottom: "23.42%",
  },
  componentChild4: {
    top: "99.7%",
    bottom: "0%",
  },
  vectorParent: {
    top: 227,
    left: 46,
    width: 339,
    height: 333,
    position: "absolute",
  },
  frameChild2: {
    height: "2.55%",
    width: "4.88%",
    top: "70.67%",
    right: "84.42%",
    bottom: "26.79%",
    left: "10.7%",
  },
  vendaRealizadaId5: {
    height: "2.18%",
    width: "47.21%",
    top: "71.03%",
    left: "17.67%",
  },
  r1232223005: {
    height: "1.58%",
    width: "17.67%",
    top: "71.52%",
    left: "68.37%",
  },
  notificaes: {
    top: 144,
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    left: 53,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  rectangleParent: {
    left: 860,
    top: 0,
    width: 430,
  },
  rectangleFrame: {
    left: 1290,
    top: 0,
    width: 430,
  },
  frameParent: {
    top: 4,
    left: -860,
    width: 1720,
  },
  notificao: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Notificao1;
