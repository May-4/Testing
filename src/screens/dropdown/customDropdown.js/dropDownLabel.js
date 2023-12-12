import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import style from '../dropDownScreen.style';


const DropDownWithLabel = (props) => {

  const {
    label,
    items,
    value,
    setValue,
    open,
    setOpen,
    zIndex,
    isLabelValueSame = true,
    hasErrorMsg = false,
    errorMsg = '',

  } = props;

  const [loading, setLoading] = useState(false);

  let defaultArray;

  if (isLabelValueSame) {
    defaultArray = items.map((item) => ({ label: item, value: item }))
  } else {
    defaultArray = items;
  }

  return (
    <>
      <View style={style.inputWrapper}>
        <Text style={style.inputLabel}>{label}</Text>
        <DropDownPicker
          items={defaultArray}
          open={open}
          value={value}
          setOpen={setOpen}
          setValue={(selectedValue) => setValue(selectedValue)}
          containerStyle={style.dropdownStyle}
          dropDownContainerStyle={style.dcontainerStyle}
          zIndex={zIndex}
          onOpen={() => console.log("open")}
          closeAfterSelecting={true}
          showTickIcon={false}
          loading={loading}
        />
      </View>
      {hasErrorMsg && <Text style={{ color: 'red', width: '100%' }}> {errorMsg} </Text>}
    </>
  );
};

export default DropDownWithLabel;
