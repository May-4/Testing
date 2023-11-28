
import { createTheme } from '@rneui/themed';
import { COLOR } from '../theme/colorSchema';
import { SelectDropdown } from "react-native-select-dropdown";

const getCustomTheme = () => {
    return createTheme(
        {
            lightColors: COLOR,
            mode: 'light',
            components: {
                Button: (props, theme) => ({
                    containerStyle: {
                        marginVertical: 10,
                        borderRadius: 10, //မပါရင် effect squareဖစ်
                    },
                    buttonStyle: {
                        backgroundColor: (props.type == 'solid' || props.type == null) ? theme.colors.primary : 'transparent',
                        borderRadius: 10,
                    },
                    titleStyle: {
                        color: (props.type == 'solid' || props.type == null) ? theme.colors.white : theme.colors.primary,
                        // fontFamily: theme.fonts.regular,
                    },
                }),
                Input: (_, theme) => ({
                    inputContainerStyle: {
                        marginBottom: 0,
                        borderWidth: 1,
                        borderColor: 'black'
                    },
                    inputStyle: {
                        //paddingBottom: 0,

                    },
                    style: {
                        fontSize: 16,
                        color: theme.colors.black,
                    }
                }),
                SelectDropdown: (_, theme) => ({
                    buttonStyle: {
                        width: "50%",
                        height: 35,
                        marginTop: 10,
                        backgroundColor: theme.colors.white,
                        borderRadius: 10,
                        borderWidth: 0.5,
                        borderColor: theme.colors.silver,
                    }
                })

            },
        }
    );
};

export default getCustomTheme;
