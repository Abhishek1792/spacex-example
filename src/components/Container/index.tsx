import { useAppTheme } from '@src/theme/theme';
import { ReactNode } from 'react';
import { SafeAreaView, View, ViewStyle } from 'react-native';
import makeStyles from './styles';

interface IContainerProps {
  children: ReactNode;
  style?: ViewStyle;
}

const Container = ({ children, style }: IContainerProps) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  return (
    <SafeAreaView>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};
export default Container;
