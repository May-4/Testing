import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles((theme) => ({
  tabBarStyle: {
    height: 65,
    borderTopWidth: 0,
    shadowColor: theme.colors.brightGrey,
    shadowOffset: {
      width: 1,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  searchIcon: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 9,
    paddingHorizontal: 10,
    borderRadius: 30,
    shadowColor: theme.colors.primary,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
  badgeStyle: {
    backgroundColor: theme.colors.danger,
    position: "absolute",
    top: 14,
    left: 1,
  },
}))


export default useStyles;
