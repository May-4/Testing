import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  LoginHeader: {
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    borderBottomLeftRadius: 80,
    paddingVertical: 30,
  },
  logoText: {
    color: theme.colors.white,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 20,
  },
  logoContainer: (w, h) => ({
    width: w,
    height: h,
  }),
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  loginTitle: {
    marginTop: 20,
    textAlign: 'center'
  },
  loginPreviousText: {
    textAlign: 'center',
    marginTop: 15,
  },
  errorStyle: {
    color: theme.colors.error,
    fontSize: 11,
    //marginBottom: 0,
  },
  loginBtn: {
    paddingVertical: 15,
    marginTop: 35,
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
  },



  dropdownBtnStyle: {
    width: "50%",
    height: 35,
    marginTop: 10,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: theme.colors.silver,
  },
  dropdownBtnTxtStyle: {
    color: theme.colors.darkBlue,
    textAlign: "left",
    fontSize: 14,
  },
  dropdownDropdownStyle: {
    backgroundColor: theme.colors.white,
    borderRadius: 5,
  },
  dropdownRowStyle: {
    backgroundColor: theme.colors.white,
    borderBottomColor: theme.colors.lightGrey,
  },
  dropdownRowTxtStyle: {
    color: theme.colors.darkBlue,
    textAlign: "left",
    fontSize: 16,
  },

}));

export default useStyles;
