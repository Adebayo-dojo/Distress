import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "@/components/CustomInput";
import Checkbox from "expo-checkbox";
import { Link } from "expo-router";

export default function AuthIndex() {
  const windowHeight = Dimensions.get("window").height;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#000000", "#161616", "#161616", "#000000"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: windowHeight,
        }}
      />
      <View style={{ flex: 1, marginHorizontal: 16, justifyContent: "center" }}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "#7a7a7a",
              fontWeight: "700",
              fontSize: 20,
              lineHeight: 30,
            }}
          >
            Enter your info to register
          </Text>
        </View>

        <LinearGradient
          colors={["#161616", "#000000"]}
          style={{
            marginTop: 36,
            borderRadius: 32,
            paddingBottom: 32,
            paddingHorizontal: 16,
          }}
        >
          <CustomInput placeholder="Kurosaki Ichigo" />
          <CustomInput placeholder="Email address" />
          <CustomInput placeholder="Phone number" />
          <CustomInput placeholder="Home address" />
          <CustomInput placeholder="Password" />
          <CustomInput placeholder="Confirm Password" />
          <View
            style={{
              flexDirection: "row",
              gap: 16,
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Checkbox />
            <Text style={{ color: "#7a7a7a" }}>
              I agree to the terms stated below
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Link href={"/permissions"} asChild>
              <TouchableOpacity
                style={{
                  backgroundColor: "#171717",
                  borderWidth: 1,
                  borderRadius: 32,
                  paddingVertical: 16,
                  paddingHorizontal: 36,
                  borderColor: "#7a7a7a25",
                  marginTop: 26,
                }}
              >
                <Text
                  style={{
                    color: "#7a7a7a",
                    fontSize: 15,
                    fontWeight: "500",
                    lineHeight: 22.5,
                  }}
                >
                  SUBMIT AND REGISTER
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </LinearGradient>

        <View
          style={{
            marginTop: 36,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#171717",
            paddingVertical: 16,
            paddingHorizontal: 12,
            borderRadius: 12,
          }}
        >
          <View></View>
          <Text style={{ fontSize: 15, lineHeight: 20.5, color: "#7a7a7a" }}>
            READ OUR TERMS AND CONDITIONS
          </Text>
          <View></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
