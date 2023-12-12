import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    marginBottom:10,
  },
  inputLabel: {
    color: '#000',
    width:"30%"
  },
  dropdownStyle: {
    height: 50,
    width: "65%",
   
    
  },
  overLapping: (val) => ({
    zIndex: val
  }),
  dcontainerStyle: {
  }

})
export default style