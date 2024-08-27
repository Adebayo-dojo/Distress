import {
  Alert,
  Dimensions,
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Contacts from "expo-contacts";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function SelectContacts() {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);
  const windowHeight = Dimensions.get("window").height;
  const [selectedContacts, setSelectedContacts] = useState<Contacts.Contact[]>(
    []
  );
  const [lastContact, setLastContact] = useState<Contacts.Contact>();

  const selectContact = (newContact: Contacts.Contact) => {
    if (selectedContacts.length == 3) {
      setLastContact(newContact);
    }
    setSelectedContacts((prev: Contacts.Contact[]) => [...prev, newContact]);
    setContacts((prev: Contacts.Contact[]) =>
      prev.filter((contact) => contact.id !== newContact.id)
    );
  };

  const deselectContact = (contactToRemove: Contacts.Contact) => {
    setSelectedContacts((prev: Contacts.Contact[]) =>
      prev.filter((contact) => contact.id !== contactToRemove.id)
    );
    setContacts((prev: Contacts.Contact[]) => [contactToRemove, ...prev]);
  };

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === "granted") {
          const { data } = await Contacts.getContactsAsync();

          if (data.length > 0) {
            const contacts = data;
            console.log(data);
            setContacts(data);
            setSelectedContacts([]);
          }
        }
      } catch (err) {
        if (err) {
          handleDeniedContactsPermission();
        }
      }
    })();
  }, []);

  useEffect(() => {
    if (selectedContacts.length > 3) {
      Alert.alert(
        "Emergency Contacts Selected",
        "Please confirm you have selected 4 emergency contacts.",
        [
          {
            text: "No",
            style: "cancel",
            onPress: () => deselectContact(lastContact),
          },
          { text: "Yes", onPress: navigateToHomeScreen },
        ]
      );
    }
  }, [selectedContacts]);

  const navigateToHomeScreen = () => {
    router.replace("/(screens)/");
  };

  const openSettings = () => {
    if (Platform.OS === "ios") {
      Linking.openURL("app-settings:");
    } else {
      Linking.openSettings();
    }
  };

  const handleDeniedContactsPermission = () => {
    Alert.alert(
      "Contacts Permission Required",
      "This app needs access to your contacts. Please grant permission in the app settings.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Open Settings", onPress: openSettings },
      ]
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#000000", "#161616", "#000000", "#161616"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: windowHeight,
        }}
      />
      <View style={{ flex: 1, marginHorizontal: 16 }}>
        <View
          style={{
            backgroundColor: "#161616",
            borderRadius: 24,
            paddingHorizontal: 12,
            paddingVertical: 12,
            marginBottom: 24,
          }}
        >
          <View
            style={{
              borderColor: "#7a7a7a40",
              borderWidth: 1,
              borderStyle: "dashed",
              borderRadius: 32,
              paddingHorizontal: 8,
              paddingVertical: 8,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <View style={{ flexDirection: "row", gap: 16 }}>
              <View>
                <Image source={require("@/assets/images/authorities.png")} />
              </View>
              <View style={{ justifyContent: "space-between" }}>
                <Text
                  style={{ fontSize: 16, color: "#7a7a7a", lineHeight: 22 }}
                >
                  Local Authorities
                </Text>
                <Text
                  style={{ fontSize: 12, lineHeight: 16.5, color: "#7a7a7a40" }}
                >
                  911
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{ fontSize: 12, lineHeight: 16.5, color: "#7a7a7a40" }}
              >
                Added by default
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#222222",
              borderRadius: 16,
              paddingVertical: 18,
              paddingHorizontal: 16,
              gap: 18,
              marginTop: 12,
            }}
          >
            {selectedContacts?.map((contact) => (
              <TouchableOpacity
                onPress={() => deselectContact(contact)}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flexDirection: "row", gap: 16 }}>
                  <View>
                    <Image source={require("@/assets/images/person.png")} />
                  </View>
                  <View style={{ justifyContent: "space-between" }}>
                    <Text
                      style={{ fontSize: 16, lineHeight: 22, color: "#7a7a7a" }}
                    >
                      {contact.firstName} {contact.lastName}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        lineHeight: 16.5,
                        color: "#7a7a7a40",
                      }}
                    >
                      {contact.phoneNumbers[0].number}
                    </Text>
                  </View>
                </View>
                <View>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: "#7a7a7a",
                      width: 24,
                      height: 24,
                      borderRadius: 100,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: 10,
                        borderWidth: 1,
                        borderColor: "#7a7a7a",
                      }}
                    ></View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#161616",
            borderRadius: 24,
            paddingHorizontal: 12,
            paddingTop: 12,
            flex: 1,
          }}
        >
          <View
            style={{
              backgroundColor: "#00000060",
              borderRadius: 18,
              paddingVertical: 16,
              paddingHorizontal: 16,
            }}
          >
            <TextInput
              placeholder="Search your contacts"
              placeholderTextColor={"#7a7a7a40"}
              style={{ fontSize: 16, lineHeight: 21, color: "#e9e9e9" }}
            />
          </View>

          <ScrollView style={{ flex: 1, paddingTop: 18 }}>
            {contacts?.map((contact) => (
              <TouchableOpacity
                onPress={() => selectContact(contact)}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 18,
                  paddingHorizontal: 16,
                }}
              >
                <View style={{ flexDirection: "row", gap: 16 }}>
                  <View>
                    <Image
                      source={
                        contact.imageAvailable
                          ? contact.image
                          : require("@/assets/images/person.png")
                      }
                    />
                  </View>
                  <View style={{ justifyContent: "space-between" }}>
                    <Text
                      style={{ fontSize: 16, lineHeight: 22, color: "#7a7a7a" }}
                    >
                      {contact.firstName} {contact.lastName}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        lineHeight: 16.5,
                        color: "#7a7a7a40",
                      }}
                    >
                      {contact?.phoneNumbers[0].number}
                    </Text>
                  </View>
                </View>
                <View>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: "#7a7a7a",
                      width: 24,
                      height: 24,
                      borderRadius: 100,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image source={require("@/assets/images/plus.png")} />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
