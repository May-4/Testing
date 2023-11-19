import { TouchableOpacity, View, ScrollView, TextInput,BackHandler, Alert, Vibration, KeyboardAvoidingView, Linking, AppState, Modal, Pressable, Platform } from 'react-native';
import { Badge, Button, Divider, Image, Text, Input, useTheme, lightColors, } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { makeStyles } from '@rneui/themed';
import Ionicon from 'react-native-vector-icons/Ionicons';
import useStyles from './login.style';
import { useState } from 'react';
import { Formik } from 'formik';
import { Dropdown } from 'react-native-element-dropdown';
import SelectDropdown from "react-native-select-dropdown";
import { ImageResource } from "../../utils/constant/resource";
import { initialValues, campusList } from '../../utils/constant/constant'
import SwitchAccount from '../SwitchAccount/switchAccount';
import RenderIf from '../../utils/helper/renderIf';
import CustomStatusBar from '../../component/gm-school/CustomStatusBar/customStatusBar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomError from '../../component/gm-school/CustomError/customError';

const LoginScreen = () => {
  
  const styles = useStyles();
  const { theme } = useTheme();

  const [campusId, setCampusId] = useState(null);
  const [showSwitchAccountModal, setShowSwitchAccountModal] = useState(false)
  const keyboardStatus = true;
  const isPreviousUserExist = true;
  const loginIdError = "Campus is required";

  return (
    <>
      <CustomStatusBar />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView style={{ flex: 1 }} enabled={keyboardStatus} behavior={Platform.OS !== 'ios' ? 'padding' : null}>
            <View style={styles.LoginHeader}>
              <TouchableOpacity activeOpacity={0.9} style={styles.logoContainer(90, 90)}>
                <Image
                  source={ImageResource.logo["bib_logo"]}
                  style={styles.logo}
                />
              </TouchableOpacity>
              <View>
                <Text style={styles.logoText}>BIB Institute</Text>
                {
                  <SelectDropdown
                    data={campusList.length > 0 && campusList?.map(res => res.text)}
                    onSelect={(_, index) => {
                      setCampusId(campusList[index].id);
                    }}
                    defaultButtonText={"Select Campus"}
                    defaultValueByIndex={campusList?.findIndex(res => res.id == campusId)}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem;
                    }}
                    //onFocus={getData}
                    rowTextForSelection={(item, index) => {
                      return item;
                    }}
                    buttonStyle={styles.dropdownBtnStyle}
                    buttonTextStyle={styles.dropdownBtnTxtStyle}
                    renderDropdownIcon={(isOpened) => {
                      return (
                        <Ionicon
                          name={isOpened ? "chevron-up" : "chevron-down"}
                          color={theme.colors.darkBlue}
                          size={22}
                        />
                      );
                    }}
                    dropdownIconPosition={"right"}
                    dropdownStyle={styles.dropdownDropdownStyle}
                    rowStyle={styles.dropdownRowStyle}
                    rowTextStyle={styles.dropdownRowTxtStyle}
                  />
                }
                {/*{campusIdError != null && <CustomError text={campusIdError} />}*/}
              </View>
            </View>
            {/* Login Header */}

            <View style={{ margin: 20 }}>
              <RenderIf isTrue={isPreviousUserExist}>
                <Text style={styles.loginTitle}>Login with account belonging to the school</Text>
              </RenderIf>

              <View style={styles.LoginForm}>
                <Input
                  placeholder='Login ID'  
                  rightIcon={<Ionicon name='mail' size={24} color={theme.colors.silver} />}
                  containerStyle={{height:50, marginTop:20,}}
                />
                {loginIdError != null && <CustomError text={loginIdError} />}

                <Input
                  placeholder='Password'
                  rightIcon={<Ionicon name='lock-closed' size={24} color={theme.colors.silver} />}
                  containerStyle={{ height: 50, marginTop: 20, }}
                />

                <Button title={'Sign IN'} buttonStyle={styles.loginBtn} containerStyle={{ borderRadius: 5 }} />
              </View>

              <RenderIf isTrue={showSwitchAccountModal}  >
                <SwitchAccount closeModal={() => { setShowSwitchAccountModal(false) }} isUserLogout={true} />
              </RenderIf>
              <TouchableOpacity onPress={() => setShowSwitchAccountModal(true)}>
                <Text style={styles.loginPreviousText}>Login with previous account credentials ?</Text>
              </TouchableOpacity>
            </View>
            {/*Login Form*/}
            
          </KeyboardAvoidingView>
        </ScrollView>
      </KeyboardAwareScrollView>
    </>
  );

};

export default LoginScreen;
