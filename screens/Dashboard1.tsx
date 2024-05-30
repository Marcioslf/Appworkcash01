import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Dashboard1 = () => {
  return (
    <View style={[styles.dashboard, styles.parentLayout]}>
      <View style={[styles.frameParent, styles.frameLayout]}>
        <View style={[styles.rectangleWrapper, styles.frameLayout]}>
          <View style={[styles.frameChild, styles.parentPosition]} />
        </View>
        <View style={[styles.rectangleContainer, styles.frameLayout]}>
          <View style={[styles.frameChild, styles.parentPosition]} />
        </View>
        <View style={[styles.rectangleFrame, styles.frameLayout]}>
          <View style={[styles.frameChild, styles.parentPosition]} />
        </View>
        <View style={[styles.frameView, styles.frameLayout]}>
          <View style={[styles.frameChild, styles.parentPosition]} />
        </View>
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-7.png")}
        />
        <Text style={[styles.marcioLira, styles.marcioLiraTypo]}>
          Marcio Lira
        </Text>
        <Text style={[styles.rankEspartano, styles.marcioLiraTypo]}>
          <Text style={styles.rank}>{`Rank: `}</Text>
          <Text style={styles.espartano}>Espartano</Text>
        </Text>
        <View style={styles.groupWrapper}>
          <View style={styles.vectorParent}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
            <Text
              style={[styles.saldoTotal, styles.marcioLiraTypo]}
            >{`Saldo Total `}</Text>
            <Text style={[styles.r223233200, styles.marcioLiraTypo]}>
              R$22.323.32,00
            </Text>
            <View style={styles.disponvelParent}>
              <Text style={[styles.disponvel, styles.disponvelTypo]}>
                disponível
              </Text>
              <Image
                style={styles.groupChild}
                contentFit="cover"
                source={require("../assets/ellipse-8.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.parent, styles.parentPosition]}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/3.png")}
        />
        <View style={[styles.vectorGroup, styles.vectorGroupLayout]}>
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-81.png")}
          />
          <Image
            style={[styles.groupInner, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-81.png")}
          />
          <Image
            style={[styles.groupChild1, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-81.png")}
          />
          <View style={[styles.totalDeVendasParent, styles.vectorGroupLayout]}>
            <Text style={styles.totalDeVendas}>Total de vendas</Text>
            <Text style={[styles.r123222300, styles.r123222300Typo]}>
              R$ 12.322.23.00
            </Text>
            <Text style={[styles.vendasDoMs, styles.vendasTypo]}>
              Vendas do mês
            </Text>
            <Text style={[styles.vendasDoHoje, styles.vendasTypo]}>
              Vendas do hoje
            </Text>
            <Text style={[styles.r1232223001, styles.r123222300Typo]}>
              R$ 12.322.23.00
            </Text>
            <Text style={[styles.r1232223002, styles.r123222300Typo]}>
              R$ 12.322.23.00
            </Text>
            <Text style={[styles.informaesGerais, styles.disponvelTypo]}>
              informações gerais
            </Text>
            <View style={[styles.groupChild2, styles.groupChildLayout]} />
            <View style={[styles.groupChild3, styles.groupChildLayout]} />
            <View style={[styles.groupChild4, styles.groupChildLayout]} />
          </View>
        </View>
        <Image
          style={styles.newLogoWcBrancaPrancheta1}
          contentFit="cover"
          source={require("../assets/new-logo-wc-branca-prancheta-1-2.png")}
        />
      </View>
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 932,
    overflow: "hidden",
  },
  frameLayout: {
    height: 825,
    position: "absolute",
  },
  parentPosition: {
    opacity: 0.4,
    position: "absolute",
  },
  marcioLiraTypo: {
    textAlign: "center",
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    position: "absolute",
  },
  disponvelTypo: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  vectorGroupLayout: {
    height: 228,
    width: 312,
    position: "absolute",
  },
  groupLayout: {
    height: 19,
    width: 19,
    left: 1,
    position: "absolute",
  },
  r123222300Typo: {
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    position: "absolute",
  },
  vendasTypo: {
    left: 30,
    fontFamily: FontFamily.urbanistLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  groupChildLayout: {
    height: 1,
    width: 309,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  frameChild: {
    marginLeft: -186,
    left: "50%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorLightslategray_100,
    width: 373,
    height: 617,
    top: 104,
  },
  rectangleWrapper: {
    width: 430,
    top: 0,
    left: 0,
  },
  rectangleContainer: {
    left: 430,
    width: 430,
    top: 0,
  },
  rectangleFrame: {
    left: 860,
    width: 430,
    top: 0,
  },
  frameView: {
    left: 1290,
    width: 430,
    top: 0,
  },
  ellipseIcon: {
    top: 125,
    left: 56,
    width: 142,
    height: 142,
    position: "absolute",
  },
  marcioLira: {
    top: 172,
    left: 213,
    fontSize: FontSize.size_6xl,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
  },
  rank: {
    color: Color.colorDimgray_100,
  },
  espartano: {
    color: Color.colorOrange,
  },
  rankEspartano: {
    top: 202,
    left: 232,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
  },
  vectorIcon: {
    height: "8.84%",
    width: "8%",
    top: "49.66%",
    right: "18%",
    bottom: "41.5%",
    left: "74%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  saldoTotal: {
    top: 69,
    left: 68,
    fontSize: FontSize.size_xl,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
  },
  r223233200: {
    fontSize: FontSize.size_17xl,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    top: 104,
    left: 0,
  },
  disponvel: {
    left: 11,
  },
  groupChild: {
    top: 5,
    width: 8,
    height: 8,
    left: 0,
    position: "absolute",
  },
  disponvelParent: {
    left: 141,
    width: 71,
    height: 16,
    top: 0,
    position: "absolute",
  },
  vectorParent: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  groupWrapper: {
    height: "17.82%",
    width: "14.53%",
    top: "26.55%",
    right: "79.88%",
    bottom: "55.64%",
    left: "5.58%",
    position: "absolute",
  },
  frameParent: {
    top: 4,
    width: 1720,
    left: 0,
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
  groupItem: {
    top: 38,
    height: 19,
    width: 19,
    left: 1,
  },
  groupInner: {
    top: 111,
  },
  groupChild1: {
    top: 185,
  },
  totalDeVendas: {
    left: 29,
    fontFamily: FontFamily.urbanistLight,
    fontWeight: "300",
    top: 38,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  r123222300: {
    top: 43,
    left: 223,
    fontSize: FontSize.size_3xs,
  },
  vendasDoMs: {
    top: 113,
  },
  vendasDoHoje: {
    top: 186,
  },
  r1232223001: {
    top: 116,
    left: 225,
  },
  r1232223002: {
    top: 190,
    left: 223,
    fontSize: FontSize.size_3xs,
  },
  informaesGerais: {
    left: 6,
  },
  groupChild2: {
    top: 83,
    left: 3,
  },
  groupChild3: {
    top: 155,
    left: 0,
  },
  groupChild4: {
    top: 227,
    left: 0,
  },
  totalDeVendasParent: {
    top: 0,
    left: 0,
  },
  vectorGroup: {
    top: 393,
    left: 67,
  },
  newLogoWcBrancaPrancheta1: {
    top: 27,
    left: 91,
    width: 260,
    height: 62,
    position: "absolute",
  },
  parent: {
    borderRadius: Border.br_6xs,
    width: 430,
    top: 0,
    left: 0,
    overflow: "hidden",
    height: 932,
  },
  image2Icon: {
    top: 134,
    left: 61,
    borderRadius: Border.br_93xl,
    width: 132,
    height: 133,
    position: "absolute",
  },
  dashboard: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_300,
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default Dashboard1;
