import Switch from "expo-dark-mode-switch";
import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Appearance
}from "react-native";
import { Switch as Switch2 } from "react-native-switch";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Icon from "react-native-vector-icons/MaterialIcons";
import themeContext from './themeContext';
import EventRegister from "react-native-event-listeners";
import theme from './theme';



const User_settings = ({ navigation }) => {
  //const theme = useContext(themeContext);
  const [mode, setMode] = useState(Appearance.getColorScheme() == 'dark'); // false = dark
  const [receiveNoti, setReceiveNoti] = useState(true);
  const [integratedNum, setIntegratedData] = useState(false);
  var mode1 = theme.choice.theme;
  console.log("Here: " +mode);
  console.log(Appearance.getColorScheme());
  console.log("_____________________");
  /*
  function updateTheme (){
    if(mode == true)
      theme.choice.theme = 'light'
    else 
      theme.choice.theme = 'dark';
  }
  */
  useEffect(() => {
    if (!receiveNoti) {
      clearNotifications();
    }
  }, [receiveNoti]);

  useEffect(() => {
    updateIntegratedNum();
  }, [, integratedNum]);

  const clearNotifications = async () => {
    await AsyncStorage.setItem("notification_Items", JSON.stringify([]));
  };

  const updateIntegratedNum = async () => {
    console.log("integrated num updated");
    if (integratedNum) {
      await AsyncStorage.setItem(
        "integratedItems_num",
        JSON.stringify({ value: 5 })
      );
    } else {
      await AsyncStorage.setItem(
        "integratedItems_num",
        JSON.stringify({ value: 2 })
      );
    }
  };

  return (
    <SafeAreaView style={mode1 == 'light' ? styles.container:styles.containerDark}>
      {/** Return Button to previous page */}
      <Pressable
        style={{ marginLeft: 8, flexDirection: "row", alignItems: "center" }}
        onPress={() => navigation.navigate("Entry", { screen: "Entry_home" })}
      >
        <Icon style={{ color: "#053466" }} name="chevron-left" size={25} />
        <Text style={{ fontSize: 16, marginLeft: -3 }}>Back</Text>
      </Pressable>

      {/** Title header */}
      <View style={[styles.header, {backgroundColor: theme.backgroud}]}>
        <Text style={[styles.noti, {color: theme.color}]}>Settings</Text>
      </View>

      {/** All settings stored here */}
      <View style={styles.settingOptionList}>
        {/** Swipe Button for the user to change the color scheme */}
        <View style={styles.changeThemeBar}>
          <View style={{ paddingRight: 60 }}>
            <Text style={styles.settingSubHeading}>Theme Color</Text>
            <Text style={{ fontSize: 11, color: "grey" }}>
              Shift between light and dark mode.
            </Text>
          </View>
          <Switch
            value={mode}
            onChange = {(value) => {
                setMode(() => !mode);
                //updateTheme();
                if(mode == true){
                  Appearance.colorScheme = 'light';
                  theme.choice.theme = 'light';
                }
                else if(mode == false){
                  Appearance.colorScheme = 'dark';
                  theme.choice.theme = 'dark';
                }
                console.log("Mode is: " + mode);
                console.log(Appearance.colorScheme);
                console.log(theme.choice.theme);
           }}
            /> 
        </View>

        {/** Store Notification */}
        <View style={styles.changeThemeBar}>
          <View style={{ paddingRight: 102 }}>
            <Text style={styles.settingSubHeading}>Keep Me Updated</Text>
            <Text style={{ fontSize: 11, color: "grey" }}>
              Receive daily Notifications.
            </Text>
          </View>
          <Switch2
            value={receiveNoti}
            circleBorderWidth={2}
            switchWidthMultiplier={2.2}
            activeText={""}
            inActiveText={""}
            circleSize={32}
            backgroundActive={"#81b0ff"}
            backgroundInactive={"#767577"}
            circleActiveColor={"#cce9fe"}
            circleInActiveColor={"#000000"}
            onValueChange={(receiveNoti) => setReceiveNoti(receiveNoti)}
          />
        </View>

        {/** Set number of data columns */}
        <View style={styles.changeThemeBar}>
          <View style={{ paddingRight: 35 }}>
            <Text style={styles.settingSubHeading}>Integrate All</Text>
            <Text style={{ fontSize: 11, color: "grey" }}>
              Show more data columns in home page.
            </Text>
          </View>
          <Switch2
            value={integratedNum}
            circleBorderWidth={2}
            switchWidthMultiplier={2.2}
            activeText={""}
            inActiveText={""}
            circleSize={32}
            backgroundActive={"#81b0ff"}
            backgroundInactive={"#767577"}
            circleActiveColor={"#cce9fe"}
            circleInActiveColor={"#000000"}
            onValueChange={(integratedNum) => setIntegratedData(integratedNum)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: -8,
  },
  containerDark: {
    flex: 1,
    backgroundColor: "#121212",
    marginTop: -8,
  },
  sectionSubText: {
    marginLeft: 18,
    fontSize: 12.5,
    fontWeight: "500",
    paddingTop: 4,
    paddingBottom: 10,
    color: "#053466",
  },
  noti: {
    marginLeft: 18,
    fontSize: 24,
    fontWeight: "bold",
    color: "#053466",
  },
  header: {
    flexDirection: "row",
    marginLeft: 4.5,
    marginTop: 3.6,
  },
  settingOptionList: {
    marginLeft: 22.5,
    marginTop: 15,
  },
  changeThemeBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
  },
  settingSubHeading: {
    color: "#053466",
    fontSize: 16,
    fontWeight: "500",
    paddingBottom: 5,
  },
  lightButton: {
    backgroundColor: "#FAFEFF",
    borderWidth: 0.2,
    height: 35,
    width: 80,
    borderRadius: 5,
  },
  lightText: {
    paddingHorizontal: 23.5,
    paddingVertical: 9,
  },
});

export default User_settings;
