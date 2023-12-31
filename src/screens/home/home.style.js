import { StyleSheet, } from 'react-native';
const styles = theme =>
  StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: theme.colors.BACKGROUND,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      color: theme.colors.PRIMARY,
      fontSize: theme.typography.size.L,
      letterSpacing: theme.typography.letterSpacing.M,
      fontWeight: 'bold',
    },
    text: {
      color: theme.colors.TEXT,
      fontSize: theme.typography.size.M,
      letterSpacing: theme.typography.letterSpacing.S,
      textAlign: 'justify',
    },
    referralCode: {
      color: theme.colors.TEXT_SECONDARY,
      fontSize: theme.typography.size.S,
      letterSpacing: theme.typography.letterSpacing.L,
      fontWeight: 'bold',
    },
  });

export default styles;