import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  Image, Text, View, SafeAreaView, Alert, BackHandler, TouchableOpacity,
  Animated, Easing
} from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import Header from '../../../component/gm-school/Header/header'
import { ImageResource } from '../../../utils/constant/resource'
import style from './teacherHome.style'
import { AuthContext, TeacherContext } from '../../../hooks/context/context';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Label } from '../../../utils/constant/string'
import CustomStatusBar from '../../../component/gm-school/CustomStatusBar/customStatusBar'
import RenderIf from '../../../utils/helper/renderIf'
import { capitalizeFirstLetter, getAsyncNotiKeyById, truncateStr } from "../../../utils/helper/helper";
import { Color, Device } from "../../../utils/constant/constant";
import { getLatestNoticeId } from '../../../store/noticeSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import useStyle from './teacherHome.style'

function TeacherHome({ navigation }) {

  const style = useStyle();
  const userInfo = {
    account: {
      teacher_type: 1,
    }
  }

  const cardData = {
    qrCode: {
      onPress: () => navigation.navigate('QRScanner'),
      imageSource: ImageResource.home.qrcode,
      title: "QR",
    },
    student: {
      onPress: () => navigation.navigate('Student'),
      imageSource: ImageResource.home.student,
      title: "Student",
    },
    attendance: {
      onPress: () => navigation.navigate('AttendanceList'),
      imageSource: ImageResource.home.attendance,
      title: "Attendance",
    },
    report_card: {
      onPress: () => navigation.navigate('ReportCardDetail'),
      imageSource: ImageResource.home.report,
      title: "Report Card",
    },
    timetable: {
      onPress: () => navigation.navigate('Timetable'),
      imageSource: ImageResource.home.timetable,
      title: "Timetable",
    },
    course: {
      onPress: () => navigation.navigate('CourseDetailList'),
      imageSource: ImageResource.home.course,
      title: "Course",
    },
    ferry: {
      onPress: () => navigation.navigate('FerrySchedule'),
      imageSource: ImageResource.home.ferry,
      title: "Ferry",
    },
    update_pwd: {
      onPress: () => navigation.navigate('UpdatePassword',
        {
          type: userInfo.usertype, id: userInfo.account?.id, firstLogin: 0, campusId: userInfo.account?.campus_id
        }),
      imageSource: ImageResource.home.updatePW,
      title: "Update Password",
    },
  };
  const renderCard = (data, wrapperStyle = null) => {
    const isQR = data.title.toLowerCase() == 'qr' || data.title.toLowerCase() == 'qr_code';
    const wrapStyle = wrapperStyle ?? (style.touchableWrapper);
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={data.onPress} style={wrapStyle} >
        <View style={isQR ? style.squareCard : style.rectCard}>
          <Image style={isQR ? style.qrLogo : style.image} source={data.imageSource} />
          {
            !isQR && (<Text style={style.btnTxt}>{data.title}</Text>)
          }
        </View>
      </TouchableOpacity >
    )
  }

  return (
    <>
      <CustomStatusBar />
      <SafeAreaView style={style.container}>
        <Header />
        <View style={style.body}>
          <RenderIf isTrue={userInfo.account.teacher_type == 1}>
            <View style={style.row}>
              {renderCard(cardData.qrCode)}
              <View style={style.rectCardWrapper} >
                {renderCard(cardData.student, style.touchableWrapper1)}
                <View style={style.spacer}></View>
                {renderCard(cardData.attendance, style.touchableWrapper1)}
              </View>
            </View>
          </RenderIf>
          <RenderIf isTrue={userInfo.account.teacher_type == 2}>
            <View style={style.row}>
              {renderCard(cardData.student)}
              {renderCard(cardData.attendance)}
            </View>
          </RenderIf>
          <View style={[style.row, { marginTop: 10 }]}>
            {renderCard(cardData.report_card)}
            {renderCard(cardData.timetable)}
          </View>
          <View style={[style.row, { marginTop: 10 }]}>
            {renderCard(cardData.course)}
            {renderCard(cardData.ferry)}
          </View>
          <View style={[style.row, { marginTop: 10 }]}>
            {renderCard(cardData.course)}
          </View>
        </View>
      </SafeAreaView >
    </>
  )
}

export default TeacherHome