import { makeStyles } from "@rneui/themed"

const useStyle = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    marginBottom: 60
  },
  qrLogo: {
    width: 77,
    height: 77
  },
  body: {
    marginTop: 40,
    marginHorizontal: 30,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  squareCard: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  rectCardWrapper: {
    width: "48%",
  },
  touchableWrapper: {
    borderRadius: 10,
    width: "48%",
  },
  touchableWrapper1: {
    borderRadius: 10,
    width: "100%",
  },
  rectCard: {
    backgroundColor: '#fff',
    flexDirection: "row",
    width: "100%",
    padding: 15,
    alignItems: "center",
    borderRadius: 10
  },
  spacer: {
    marginBottom: 10
  },
  btnTxt: {
    marginLeft: 10,
    fontSize: 12,
    textAlign: "left",
    fontWeight: "500",
    color:theme.colors.dark,
  },
  image: {
    width: 40,
    height: 40
  },

  // rippleContainer: {
  //     borderRadius: 10,
  //     marginBottom: 50,
  //     // alignSelf: "flex-end"
  // },
  // Cardcontainer: {
  //     width: Device.width - 40,
  //     paddingHorizontal: 15,
  //     paddingVertical:10,
  //     backgroundColor:'#ffffff',
  //     flexDirection: "row",
  //     alignItems: "center",
  //     // justifyContent: "space-between",
  //     shadowColor: Color.brightGrey,
  //     shadowOffset: { width: 0, height: 1 },
  //     shadowOpacity: 0.2,
  //     shadowRadius: 2,
  // },
  // titleText: {
  //     color: Color.darkBlue,
  //     fontWeight: "600",
  //     fontSize: 16,
  //     marginLeft: 10,
  // },
  // messageText: {
  //     color: '#888',
  //     fontSize: 14,
  //     marginLeft: 10,
  // },
  // notiIconWrapper: {
  //     marginRight: 3,
  //     width:60,
  //     height:60,
  //     borderRadius:30,
  //     marginLeft:-50,
  //     alignItems:'center',
  //     justifyContent:'center',
  //     backgroundColor:'#daf2ec'
  // },
  rippleContainer: {
    borderRadius: 10,
    marginBottom: 50,
    // alignSelf: "flex-end"
    borderRadius: 50,
  },
  Cardcontainer: {
    // width: Device.width - 40,
    position: 'absolute',
    bottom: 0,
    // left: 30,
    marginBottom: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 65,
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    justifyContent: "space-between",
    shadowColor: theme.colors.brightGrey,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textContainer: {
    width: "100%",
    marginVertical: 5,
    overflow: "hidden"
  },
  titleText: {
    color: theme.colors.darkBlue,
    fontWeight: "600",
    fontSize: 14,
    marginLeft: 10,
  },
  messageText: {
    color: theme.colors.darkBlue,
    // fontWeight: "600",
    fontSize: 12,
    marginLeft: 10,
  },
  newNoti: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.danger,
    position: 'absolute',
    top: 15,
    left: 45
  }
}))
export default useStyle