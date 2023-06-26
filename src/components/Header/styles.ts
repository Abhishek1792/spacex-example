import { AppTheme } from '@src/theme/theme';
import { height } from '@src/utils/metrics';
import { StyleSheet } from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      paddingTop: 50,
      backgroundColor: theme.colors.black,
    },
    headerImage: {
      height: height / 5,
      width: '100%',
    },
  });

export default makeStyles;
