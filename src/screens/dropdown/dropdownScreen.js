import { useEffect, useState } from "react";
import { View } from "react-native"
import style from "./dropDownScreen.style";
import DropDownPicker from "react-native-dropdown-picker";
import { Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native";
import DropDownWithLabel from "./customDropdown.js/dropDownLabel";


const languages = {
   mm: "Myanmar",
   en: "English",
}

const languageArray = Object.keys(languages).map((key) => ({
   label: languages[key],
   value: key,
}));

const printers = ["Pro8", "Bts2", "Pro7", "Bts21", "Pro82", "Bts22", "Pro4", "Bts0", "Pro9", "Bts28"]

const DropdownScreen = () => {
   const [openLanguage, setOpenLanguage] = useState(false);
   const [openPrinter, setOpenPrinter] = useState(false);

   const [language, setLanguage] = useState(null);
   const [printer, setPrinter] = useState(null);


   const handleSubmit = async () => {
      await AsyncStorage.setItem("language", JSON.stringify(language))
   }
   const getLanguage = async () => {
      const data = await AsyncStorage.getItem("language");
      data ? setLanguage(JSON.parse(data)) : setLanguage(languageArray[0].value)
   }

   useEffect(() => {
      getLanguage()
   }, [])

   
   const handleCloseOther = () => {
      
   }

   return (
      <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: '#f3f3f3' }}>
         <View style={{ marginTop: 20 }}>


            <DropDownWithLabel
               label="Printer"
               items={printers}
               value={printer}
               setValue={setPrinter}
               open={openPrinter}
               setOpen={setOpenPrinter}
               zIndex={4000}
            />

            <DropDownWithLabel
               label="Language"
               items={languageArray}
               value={language}
               setValue={setLanguage}
               open={openLanguage}
               setOpen={setOpenLanguage}
               zIndex={3000}
               isLabelValueSame={false}
               hasErrorMsg={true}
               errorMsg="မှားပါသည်"
            />

            <Button onPress={handleSubmit} title="Submit" />

         </View>
      </View>
   )
}
export default DropdownScreen