import { AppTheme } from '@src/theme/theme';
import { StyleSheet } from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    missionCard: {
      backgroundColor: theme.colors.surfaceDisabled,
      height: 100,
      borderRadius: 20,
      margin: 10,
      padding: 10,
      paddingBottom: 15,
    },
    missionTitle: {
      fontSize: 18,
      fontWeight: '500',
      color: theme.colors.text,
    },
    missionNumber: {
      position: 'absolute',
      right: 20,
      top: 10,
      fontWeight: 'bold',
      color: theme.colors.text,
    },
    titleContainer: {
      gap: 5,
      paddingTop: 10,
    },
  });

export default makeStyles;
