import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from './src/navigation/navigation'
import { ThemeProvider } from '@rneui/themed';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import getCustomTheme from './src/utils/helper/theme';
import LoginScreen from './src/screens/login/login';
import ParentHome from './src/screens/parent/ParentHome/parentHome';
import { Provider as RNPaperProvider } from "react-native-paper";
import { MenuProvider } from "react-native-popup-menu";
import TeacherHome from './src/screens/Teacher/TeacherHome/teacherHome';
import { QueryClient, QueryClientProvider } from 'react-query';
import TodoHome from './src/screens/ToDo/todo';
import DropdownScreen from './src/screens/dropdown/dropdownScreen';

const App = () => {

  const theme = getCustomTheme();
  const queryClient = new QueryClient();

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          {/*<TodoHome />*/}
          <DropdownScreen />
        </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  )
};
export default App;
