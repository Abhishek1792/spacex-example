import { AppTheme } from '@src/theme/theme';
import { StyleSheet } from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    heading: {
      fontSize: 24,
      fontWeight: '600',
      color: theme.colors.text,
      textAlign: 'center',
      paddingTop: 20,
    },
    imageStyle: {
      height: 300,
      width: '100%',
      resizeMode: 'stretch',
    },
    imageContainer: {
      height: 250,
    },
    detailContainer: {
      margin: 10,
      marginTop: 0,
      paddingBottom: 300,
      backgroundColor: theme.colors.background,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    detailCard: {
      backgroundColor: theme.colors.surfaceDisabled,
      marginVertical: 20,
      padding: 10,
      borderRadius: 10,
    },
    cardHeading: {
      fontSize: 18,
      fontWeight: '500',
      textAlign: 'center',
    },
    detailRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
    },
    detailRowLabel: {
      color: theme.colors.text,
      fontSize: 16,
      fontWeight: 'bold',
    },
    detailRowValue: {
      color: theme.colors.gray,
      fontSize: 15,
    },
    detailText: {
      paddingTop: 20,
    },
    playButton: {
      position: 'absolute',
      right: 10,
      bottom: 0,
      zIndex: 999,
      backgroundColor: 'white',
      height: 50,
      width: 50,
      borderRadius: 25,
    },
  });

export default makeStyles;
