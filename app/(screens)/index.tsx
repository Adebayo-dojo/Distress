import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

export default function HomeScreen() {
  const windowHeight = Dimensions.get("window").height;
  const [emergency, setEmergency] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={
          emergency
            ? ["#a80000", "#c60000", "#a80000", "#c60000"]
            : ["#000000", "#161616", "#000000", "#161616"]
        }
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: windowHeight,
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 12,
        }}
      >
        <View>
          <View
            style={{
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!emergency ? (
              <>
                <Image
                  style={{ position: "absolute" }}
                  source={require("@/assets/images/Ellipse1.png")}
                />
                <Image
                  style={{ position: "absolute" }}
                  source={require("@/assets/images/Ellipse2.png")}
                />
              </>
            ) : (
              <>
                <Image
                  style={{ position: "absolute" }}
                  source={require("@/assets/images/Ellipse3.png")}
                />
                <Image
                  style={{ position: "absolute" }}
                  source={require("@/assets/images/Ellipse4.png")}
                />
              </>
            )}
            <View
              style={{
                backgroundColor: emergency ? "#e9e9e940" : "#c6000040",
                width: 220,
                height: 220,
                borderRadius: 200,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: emergency ? "#e9e9e960" : "#c6000060",
                  width: 180,
                  height: 180,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: emergency ? "#e9e9e980" : "#c6000080",
                    width: 140,
                    height: 140,
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: emergency ? "#e9e9e9" : "#c60000",
                      width: 100,
                      height: 100,
                      borderRadius: 100,
                      justifyContent: "center",
                      alignItems: "center",
                      borderWidth: 6,
                      borderColor: emergency ? "#c6000025" : "#54010175",
                    }}
                  >
                    <Text
                      style={{
                        color: emergency ? "#c6000025" : "#540101",
                        fontSize: 64,
                      }}
                    >
                      !
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* <Text>Distress Sent!</Text> */}
        </View>

        <View style={{ marginTop: 100, gap: 20 }}>
          <Text
            style={{
              color: emergency ? "#e9e9e9" : "#c60000",
              fontSize: 32,
              lineHeight: 48,
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            {!emergency ? "Distress Sent!" : "Distress Alert!"}
          </Text>
          {emergency ? (
            <Text
              style={{
                fontSize: 24,
                lineHeight: 36,
                color: "#b6b6b6",
                textAlign: "center",
              }}
            >
              Your contact{" "}
              <Text style={{ color: "#e9e9e9", fontWeight: "700" }}>
                @adetoun
              </Text>{" "}
              is in an emergency
            </Text>
          ) : null}
          {emergency ? (
            <View style={{ alignItems: "center" }}>
              <Link href={"/(screens)/monitor"} asChild>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#e9e9e9",
                    borderRadius: 32,
                    paddingHorizontal: 36,
                    paddingVertical: 9,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 24,
                      lineHeight: 36,
                      color: "#c60000",
                    }}
                  >
                    Monitor
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>
          ) : null}
        </View>

        {!emergency ? (
          <View
            style={{
              position: "absolute",
              bottom: 0,
              backgroundColor: "#161616",
              borderRadius: 24,
              paddingVertical: 16,
              paddingHorizontal: 16,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                //   lineHeight: 24,
                fontWeight: "700",
                color: "#7a7a7a",
              }}
            >
              ! STAY CALM, KEEP YOUR PHONE HIDDEN AND IF POSSIBLE, ALLOW A MEANS
              TO CAPTURE ACTIVITIES SO IT’S SENT TO YOUR CONTACTS !
            </Text>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
