import React from "react";
import { useEffect } from "react";
import { View, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRoute } from '@react-navigation/native';
import { useTheme } from "@rneui/themed";

const CustomStatusBar = () => {
  const insets = useSafeAreaInsets();
  // const route = useRoute();
  const route = {
    name : 'Login',
  }
  const {theme}= useTheme();

  const getBackgroundColorBasedOnRoute = () => {
    return ['TeacherDetail','StudentDetail','Login','UpdatePassword', 'InitialUpdatePassword'].includes(route?.name) ? theme.colors.primary : theme.colors.white;

  };

  const getBarStyle = () => {
    return ['TeacherDetail','StudentDetail','Login','UpdatePassword', 'InitialUpdatePassword'].includes(route?.name) ? 'light-content' : 'dark-content';

  }

  return (
    <View style={{ height: insets.top, backgroundColor: getBackgroundColorBasedOnRoute(),
    }}>
      <StatusBar
        animated={true}
        barStyle={getBarStyle()}
        backgroundColor={getBackgroundColorBasedOnRoute()}
      />
    </View>
  );
};

export default CustomStatusBar;
